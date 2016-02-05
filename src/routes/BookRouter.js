var express = require('express');
var bookRouter = express.Router();

var router = (nav) => {

    var books = [
        {
            title: '1 - War and Peace',
            genre: 'Historical Fiction',
            author: 'Tolstoy',
            read: false
        },
        {
            title: '2 - War and Peace',
            genre: 'Historical Fiction',
            author: 'Tolstoy',
            read: false
        },
        {
            title: '3 - War and Peace',
            genre: 'Historical Fiction',
            author: 'Tolstoy',
            read: false
        }
    ];
    bookRouter.route('/')
        .get((req, res) => res.render('bookListView',
            {
                title: 'Books',
                nav: nav,
                books: books
            }));

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
