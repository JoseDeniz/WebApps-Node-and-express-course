var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function (nav) {
    authRouter.route('/signUp')
        .post((req, res) => {
            var user = req.body;
            console.log(user);
            req.login(user, () => {
                res.redirect('/auth/profile');
            });
        });
    authRouter.route('/profile')
        .get((req, res) => {
            res.json(req.user);
        });
    return authRouter;
};

module.exports = router;
