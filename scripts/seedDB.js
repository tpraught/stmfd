//Connection with the DB and seeding with data
//MODELS NAMES NEED TO BE UPDATED

const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/firedepartment");

const roster = [
  {
   //update with Fire fighters roster

  }
];

db.Roster //this is the name of the collection!!!!
  .remove({})
  .then(() => db.Roster.collection.insertMany(roster))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
