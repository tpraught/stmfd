const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

// mongoose query on User model
passport.use(new LocalStrategy({
    // passport expects username and pass, but we're using email
    usernameField: 'email'
},
    function(username, password, done) {
        user.findOne({ email: username }, function (err, user) {
            if (err) { return done(err); }
            // not found
            if (!user) {
                return done(null, false, {
                    message: 'User not foud'
                });
            }
            // wrong pass
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'wrong password'
                });
            }
            // correct pass
            return done(null, user);
        });
    }
));