var mongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017/WebApps-Node-and-express-course';

var bookController = function (bookService, nav) {

    var middleware = (req, res, next) => {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    };

    var getIndex = (req, res) => {
        mongoClient.connect(url, (err, db) => {
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
    };

    var getById = (req, res) => {
        var id = new objectId(req.params.id);
        mongoClient.connect(url, (err, db) => {
            var booksCollection = db.collection('books');
            booksCollection.findOne(
                {
                    _id: id
                },
                (err, result) => {
                    if (result.bookId) {
                        bookService.getBookById(result.bookId,
                            (err, book) => {
                                result.book = book;
                                res.render('bookView',
                                    {
                                        title: 'Books',
                                        nav: nav,
                                        book: result
                                    });
                            });
                    } else {
                        res.render('bookView',
                            {
                                title: 'Books',
                                nav: nav,
                                book: result
                            });
                    }
                });
        });
    };

    return {
        middleware: middleware,
        getIndex: getIndex,
        getById: getById
    };
};

module.exports = bookController;