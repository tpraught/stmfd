const mongoose = require("mongoose");
const passport = require ("passport");
const passportLocalMongoose = require('passport-local-mongoose');
//Old code//
// const Schema = mongoose.Schema;
//====================

const {Schema} = mongoose;


const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: 'Username is required',
      },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
      },
      fullname: {
        type: String,
      }


    // email: String,
    // firstName: String,
    // lastName: String,
    // passwordReset: { type: String, select: false },
    // username: String
});

const otherPassportOptions = {
    usernameUnique: true,
    passwordValidator: (input, cb) => {
      if (input.length < 6) {
        return cb({ code: 400, messaage: 'Password should be at least 6 characters long.' });
      }
      return cb(null);
    }
  };

  passport.serializeUser((user, done) => {
    done(null, user);
  });


UserSchema.plugin(passportLocalMongoose, otherPassportOptions);

const User = mongoose.model('User', UserSchema);

passport.deserializeUser((user, done) => {
    User.findById(user._id)
       .exec((err, data) => {
        if (err) {
          console.log('Error when deserializes user', err);
        } else {
          done(null, data);
        }
      });
  });
  

module.exports = User;