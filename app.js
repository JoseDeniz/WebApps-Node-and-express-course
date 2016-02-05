var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.listen(port, (err) => console.log('running on port: ' + port));

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index',
        {
            title: 'Hello from render',
            nav:
                [{
                    link: '/books',
                    text: 'Books'
                },
                    {
                        link: '/authors',
                        text: 'Authors'
                    }]
        });
});

app.get('/books', (req, res) => res.send('Hello Books'));
app.get('/authors', (req, res) => res.send('Hello Authors'));
