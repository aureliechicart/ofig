const express = require('express');

// importing our controllers
const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');

const router = express.Router();

router.use(mainController.menuInitializer);

// home page
router.get('/', mainController.homePage);

// article page
router.get('/article/:id', mainController.articlePage);

// bookmark page
router.get('/bookmarks', bookmarksController.bookmarksPage);

// adding a favorite
router.get('/bookmarks/add/:id', bookmarksController.addBookmark);

// removing a favorite
router.get('/bookmarks/delete/:id', bookmarksController.deleteBookmark);

// category page
router.get('/category/:category', mainController.categoryPage);

// exporting router 
module.exports = router;