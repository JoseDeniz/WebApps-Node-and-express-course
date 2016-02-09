var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb').MongoClient;

module.exports = () => {
    passport.use(new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password'
        },
        (username, password, done) => {
            var url = 'mongodb://localhost:27017/WebApps-Node-and-express-course';
            mongodb.connect(url, (err, db) => {
                var userCollection = db.collection('users');
                userCollection.findOne(
                    {
                        username: username
                    },
                    (err, result) => {
                        if (result.password === password) {
                            done(null, result);
                        } else {
                            done(null, false, {message: 'Incorrect Password'});
                        }
                    });
            });
        }));
};