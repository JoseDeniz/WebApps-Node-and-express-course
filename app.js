var express = require('express');

var app = express();

var port = 5000;

app.listen(port, (err) => console.log('running on port: ' + port));

app.get('/', (req, res) => {
    res.send("Hello World!");
});
