///Connection with the DB and seeding with data
//MODELS NAMES NEED TO BE UPDATED

const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/firedepartment");

const admin = [
   {
	  email: "admin@gmail.com",
	   password: "admin",
   },
  ];

//remove all records from Roster, then insert the 'seed' records from above
db.Admin
  .remove({})
  .then(() => db.Admin.collection.insertMany(admin))
  .then(data => {
	console.log("Admin data is \n" + JSON.stringify(data));
    console.log(data.ops.length + " records inserted!");
	process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

 
 