var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

var port = process.env.PORT || 5000;
var nav = [
    {
        link: '/books',
        text: 'Book'
    },
    {
        link: '/authors',
        text: 'Author'
    }];
var bookRouter = require('./src/routes/BookRouter')(nav);
var adminRouter = require('./src/routes/AdminRouter')(nav);
var authRouter = require('./src/routes/AuthRouter')(nav);

app.listen(port, (err) => console.log('running on port: ' + port));

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'library'}));
require('./src/config/passport')(app);

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.render('index',
        {
            title: 'Hello from render',
            nav : nav
        });
});

app.get('/authors', (req, res) => res.send('Hello Authors'));
