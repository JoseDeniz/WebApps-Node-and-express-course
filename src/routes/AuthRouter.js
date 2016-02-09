var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');

var router = function (nav) {
    authRouter.route('/signUp')
        .post((req, res) => {
            var user = req.body;
            console.log(user);
            var url = 'mongodb://localhost:27017/WebApps-Node-and-express-course';
            mongodb.connect(url, (err, db) => {
                var userCollection = db.collection('users');
                userCollection.insertOne(user, (err, result) => {
                    req.login(result.ops[0], () => {
                        res.redirect('/auth/profile');
                    });
                });
            });
        });
    authRouter.route('/signIn')
        .post(passport.authenticate('local',
            {
                failureRedirect: '/'
            }),
            (req, res) => {
                res.redirect('/auth/profile');
            });
    authRouter.route('/profile')
        .get((req, res) => {
            res.json(req.user);
        });
    return authRouter;
};

module.exports = router;
