var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = (nav) => {

    bookRouter.route('/')
        .get((req, res) => {
            var url = 'mongodb://localhost:27017/WebApps-Node-and-express-course';
            var books;

            mongodb.connect(url, (err, db) => {
                var booksCollection = db.collection('books');
                booksCollection.find({}).toArray((err, result) => {
                    res.render('bookListView',
                        {
                            title: 'Books',
                            nav: nav,
                            books: result
                        });
                });
            });
        });

    bookRouter.route('/:id')
        .get((req, res) => {
            var id = req.params.id;
            res.render('bookView',
                {
                    title: books[id].title,
                    nav: nav,
                    book: books[id]
                });
        });
    return bookRouter;
};

module.exports = router;
