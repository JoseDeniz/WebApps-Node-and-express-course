var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function (nav) {
    authRouter.route('/signUp')
        .post((req, res) => {
            console.log(req.body);
        });
    return authRouter;
};

module.exports = router;
