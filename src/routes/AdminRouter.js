var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
        {
            title: 'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            bookId: 656,
            read: false
        },
        {
            title: 'Les Misérables',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            bookId: 24280,
            read: false
        }
    ];

var router = (nav) => {

    adminRouter.route('/')
        .get((req, res) => res.send('Hello Admin!'));

    adminRouter.route('/addBooks')
        .get((req, res) => {
            var url = 'mongodb://localhost:27017/WebApps-Node-and-express-course';

            mongodb.connect(url, (err, db) => {
                console.log('Connected correctly to server');
                var booksCollection = db.collection('books');
                booksCollection.insertMany(books, (err, results) => {
                    res.send(results);
                    db.close();
                });
            });
        });

    return adminRouter;
};

module.exports = router;
