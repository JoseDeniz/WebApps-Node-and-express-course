var express = require('express');
var bookRouter = express.Router();

var router = (nav) => {

    var bookController = require('../controllers/BookController')(null, nav);

    bookRouter.use(bookController.middleware);

    bookRouter.route('/')
        .get(bookController.getIndex);

    bookRouter.route('/:id')
        .get(bookController.getById);
    return bookRouter;
};

module.exports = router;
