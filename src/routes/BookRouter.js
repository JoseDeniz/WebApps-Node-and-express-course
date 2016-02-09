var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/WebApps-Node-and-express-course';

var router = (nav) => {

    bookRouter.use((req, res, next) => {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    });

    bookRouter.route('/')
        .get((req, res) => {
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
            var id = new ObjectId(req.params.id);
            mongodb.connect(url, (err, db) => {
                var booksCollection = db.collection('books');
                booksCollection.findOne({_id: id} , (err, result) => {
                    res.render('bookView',
                        {
                            title: 'Books',
                            nav: nav,
                            book: result
                        });
                });
            });
        });
    return bookRouter;
};

module.exports = router;
