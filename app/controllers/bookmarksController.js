const path = require('path');

const bookmarksController = {

  // method to display shopping cart
  bookmarksPage: (request, response) => {
    const filePath = path.resolve(__dirname + '/../../integration/favoris.html');
    response.sendFile(filePath);
  }

};


module.exports = bookmarksController;