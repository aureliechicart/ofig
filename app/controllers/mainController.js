const path = require('path');
const dataMapper = require('../dataMapper');

const mainController = {

  // method for home page
  homePage: (request, response, next) => {
    // using dataMapper method to get all figurines
    dataMapper.getAllFigurines((error, result) => {
      if (error) {
        //  in case of error, sending 500 status code error
        response.status(500).send(error);
      } else {
        // we store the rows returned by the database in a variable
        const figurines = result.rows;
        // we pass on the result to the 'accueil' ejs view
        // we pass on a property called current to set a style conditionnally on the link of the current page
        response.render('accueil', {
          current: 'homepage',
          figurines
        });
      }
    });
  },

  // method for article page
  articlePage: (request, response, next) => {
    // we get the id from the request's params
    const targetId = request.params.id;
    //  we use the dataMapper method to get one figure based on its id
    dataMapper.getOneFigurine(targetId, (error, result) => {
      if (error) {
        // if we get a server error, we return a 500 status code error
        console.error(err);
        response.status(500).send(err);
      } else {
        // if we get a result, we store it in a variable
        const figurine = result.rows[0];
        // if the variable is null, we move to the next method
        if (!figurine) {
          next();
        }

        //  if the variable is not null, we use the dataMapper method to find reviews for this figurine
        dataMapper.getAllReviewsByFigurine(targetId, (error, result) => {
          if (error) {
            console.error(err);
            response.status(500).send(err);
          } else {
            const reviews = result.rows;
            // we render the 'article' view while passing on the figurine and reviews
            response.render('article', {
              current: 'article',
              figurine,
              reviews
            });
          }
        });
      }
    });
  }

};


module.exports = mainController;