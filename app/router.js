const express = require('express');

// importing our controllers
const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');

const router = express.Router();

// home page
router.get('/', mainController.homePage);

// article page
router.get('/article', mainController.articlePage);

// shopping cart page
router.get('/bookmarks', bookmarksController.bookmarksPage);

// exporting router 
module.exports = router;