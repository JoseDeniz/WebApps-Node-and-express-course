var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
    passport.use(new LocalStrategy({
            usernameField: 'userName',
            passwordField: 'password'
        },
        (username, password, done) => {
            var user = {
                username: username,
                password: password
            };
            done(null, user);
        }));
};