var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var bookRouter = require('./src/routes/BookRouter');

app.listen(port, (err) => console.log('running on port: ' + port));

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

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
