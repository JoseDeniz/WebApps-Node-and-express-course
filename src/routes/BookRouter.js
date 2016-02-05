var express = require('express');
var router = express.Router();

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
router.route('/')
    .get((req, res) => res.render('books',
        {
            title: 'Books',
            nav: [
                {
                    link: '/books',
                    text: 'Books'
                },
                {
                    link: '/authors',
                    text: 'Authors'
                }],
            books: books
        }));

router.route('/single')
    .get((req, res) => res.send('Hello Single Book'));

module.exports = router;