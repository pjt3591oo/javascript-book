const passport = require('passport');
const local = require('./local');
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});
passport.use(local);
module.exports = passport;
