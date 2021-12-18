const errorController = {
  notFound : (request, response) => {
      response.render('404');
  }
}

module.exports = errorController;