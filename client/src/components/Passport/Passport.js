var JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt  = require('passport-jwt').ExtractJwt;

// user model
var User = require('../../../../models/user');
var settings = require('../../../../client/src/components/Passport/Settings');

module.exports = function(passport) {
    var opts = {};
    opts.JwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = settings.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({id: jwt_payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};