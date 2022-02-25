const errorController = {
  notFound : (request, response) => {
    response.render('404', {
        current: 'homepage'
      });
  }
}

module.exports = errorController;