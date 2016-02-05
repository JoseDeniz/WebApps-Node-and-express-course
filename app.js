var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var bookRouter = express.Router();

app.listen(port, (err) => console.log('running on port: ' + port));

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Tolstoy',
        read: false
    },
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Tolstoy',
        read: false
    },
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Tolstoy',
        read: false
    }
];
bookRouter.route('/')
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

bookRouter.route('/single')
    .get((req, res) => res.send('Hello Single Book'));

app.use('/books', bookRouter);

app.get('/', (req, res) => {
    res.render('index',
        {
            title: 'Hello from render',
            nav: [{
                link: '/books',
                text: 'Books'
            },
                {
                    link: '/authors',
                    text: 'Authors'
                }]
        });
});

app.get('/authors', (req, res) => res.send('Hello Authors'));
