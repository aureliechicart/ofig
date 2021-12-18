const dataMapper = require('../dataMapper');

const bookmarksController = {

  // method to display shopping cart
  bookmarksPage: (request, response) => {
    // getting bookmarks from request's session objet
    const bookmarks = request.session.bookmarks;

    // rendering the favoris view while passing on the bookmarks
    response.render('favoris.ejs', {
      current: 'bookmarks',
      bookmarks
    });
  },

  // method for adding a favorite
  addBookmark: (request, response) => {
    // if there is no bookmarks array saved in the session, we create the array
    if (!request.session.bookmarks) {
      request.session.bookmarks = [];
    };

    // we get the id from the request's params
    const currentId = parseInt(request.params.id);

    // we use the dataMapper method to get one figurine based on its id
    dataMapper.getOneFigurine(currentId, (error, result) => {
      if (error) {
        response.status(500).send(error);
      } else {
        const figurine = result.rows[0];
        // if the figurine doesn't already appear in the bookmarks array, we add it
        if (!request.session.bookmarks.find(element => element.id === figurine.id)) {
          request.session.bookmarks.push(figurine);
        }
        // we redirect to the bookmarks path
        response.redirect('/bookmarks');
      }
    });
  },

  // method to remove a favorite
  deleteBookmark: (request, response) => {
    // if the bookmarks array stored in the session is empty, we send a message
    if (!request.session.bookmarks) {
      response.send('y a rien la dedans')
    };

    // we get the id from the request's params
    const idEnCours = parseInt(request.params.id);

    //  we use the filter method to keep all elements of the array except the chosen bookmark
    request.session.bookmarks = request.session.bookmarks.filter(element => element.id !== idEnCours);
    // we redirect to the bookmarks path
    response.redirect('/bookmarks');
  }
};


module.exports = bookmarksController;