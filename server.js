const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const logger = require("morgan");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Initialize logger
app.use(logger('dev'));

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// ----------------------------- admin ----------------------------------------------
const User = require('./models/user');

//==============Old code==============
// const authentication = require('./routes/api/login');
// const users = require('./routes/api/users');
//==============================================

// Configure Passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// ----------------------------- ----- ----------------------------------------------

var MONGODB_URI =process.env.MONGODB_URI || "mongodb://localhost/firedepartment"
  mongoose.Promise = global.Promise;
  mongoose.connect(MONGODB_URI,function(error){
     if(error){
         console.log(error)
     } else {
         console.log("Successfully connected to DB");
     }
  });

// ----------------------------- admin ----------------------------------------------
// connect mongoose
// mongoose.connect('mongodb://localhost/userlist');

app.use(require('express-session')({
    secret: 'stop the fire',
    maxAge: new Date(Date.now() + 36000000),
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false
}));


// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
  });

// Error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
