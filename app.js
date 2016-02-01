var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.listen(port, (err) => console.log('running on port: ' + port));

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', (req, res) => {
    res.render('index', {list: ['a', 'b', 'c']});
});
