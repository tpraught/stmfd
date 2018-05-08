const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    passwordReset: { type: String, select: false },
    username: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

// const adminSchema = new mongoose.Schema({
//     email:{
//         type: String,
//         unique: true,
// 	    trim: true,
// 	    required: "Email is a required field"
// 	//   validate: [
//     //   // Function takes in the new  value to be saved as an argument
//     //   function(input) {
//     //     // If this returns true, proceed. If not, return the error message below
//     //     return input.length >= 0;
//     //   },
//     //   //Error Message
//     //   "Email field can not be empty."
//     //   ]  
//     },
//     username: {
//         type: String,
//         unique: true,
//         trim: true,
//         required: "Username is a required field"
//     },
//     password:{
//         type: String,
//         trim: true,
//         required: "Password is a required field",
//         // validate: [
//         // // Function takes in the new  value to be saved as an argument
//         // function(input) {
//         //     // If this returns true, proceed. If not, return the error message below
//         //     return input.length >= 0;
//         // },
//         // //Error Message
//         // "Password field can not be empty."
//         // ]  
//     }
// // part of input field
//     // passwordConf: {
//     //     type: String,
//     //     trim: true,
//     //     required: true
//     // }
// });

// // Authenticate against database
// adminSchema.statics.authenticate = function(email, password, callback) {
//     admin.findOne({ email: email })
//         .exec(function(err, admin) {
//             if (err) {
//                 return callback(err)
//             } else if (!user) {
//                 var err = new Error("User not found.");
//                 err.status = 401;
//                 return callback(err);
//             }
//             bcrypt.compare(password, admin.password, function(err, result) {
//                 if (result === true) {
//                     return callback(null, admin);
//                 } else {
//                     return callback();
//                 }
//             });
//         });
// }

// // Hashing password before saving it to db
// adminSchema.pre('save', function(next) {
//     var admin = this;
//     bcrypt.hash(admin.password, 10, function(err, hash) {
//         if (err) {
//             return next(err);
//         }
//         admin.password = hash;
//         next();
//     });
// });

// const Admin = mongoose.model("Admin", adminSchema);

// module.exports = Admin;
