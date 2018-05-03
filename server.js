const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");


var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/firedepartment");
//var db = mongoose.connection;

// Handle mongo error
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function () {
  // we're connected!
//});

var MONGODB_URI =process.env.MONGODB_URI || "mongodb://localhost/firedepartment"

mongoose.Promise = global.Promise;

 mongoose.connect(MONGODB_URI,function(error){
     if(error){
         console.log(error)
     } else {
         console.log("Successfully connected to DB");
     }
   });

// Use sessions for tracking logins
// app.use(session({
//     secret: 'web rescue',
//     resave: true,
//     saveUninitialized: false,
//     store: new MongoStore({
//         mongooseConnection:db
//     })
// }));

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
