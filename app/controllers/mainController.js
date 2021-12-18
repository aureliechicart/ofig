const path = require('path');

const mainController = {

  // method for home page
  homePage: (request, response) => {
    response.render('accueil.ejs', {
      current: 'homepage'
    });
  },

  // method for article page
  articlePage: (request, response) => {
    response.render('article.ejs', {
      current: 'article'
    })
  }

};


module.exports = mainController;