const path = require('path');

const bookmarksController = {

  // method to display shopping cart
  bookmarksPage: (request, response) => {
    response.render('favoris.ejs', {
      current: 'bookmarks'
    });
  }
};


module.exports = bookmarksController;