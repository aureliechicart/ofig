const path = require('path');

const mainController = {

  // method for home page
  homePage: (request, response) => {
    const filePath = path.resolve(__dirname + '/../../integration/accueil.html');
    response.sendFile(filePath);
  },

  // method for article page
  articlePage: (request, response) => {
    const filePath = path.resolve(__dirname + '/../../integration/article.html');
    response.sendFile(filePath);
  }

};


module.exports = mainController;