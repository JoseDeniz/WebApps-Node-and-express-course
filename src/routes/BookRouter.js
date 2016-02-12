var express = require('express');
var bookRouter = express.Router();

var router = (nav) => {

    var bookService = require('../services/GoodReadsService')();
    var bookController = require('../controllers/BookController')(bookService, nav);

    bookRouter.use(bookController.middleware);

    bookRouter.route('/')
        .get(bookController.getIndex);

    bookRouter.route('/:id')
        .get(bookController.getById);
    return bookRouter;
};

module.exports = router;
