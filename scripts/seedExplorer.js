///Connection with the DB and seeding with data
//MODELS NAMES NEED TO BE UPDATED

const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;



mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/firedepartment");

const explorer = [
   {
	  month: "March",
	   date: "30",
     day_of_week: "Monday",
    description: "First Responder Training",	
		   time: "9:00am",
   },
   {
	  month: "April",
	   date: "6",
     day_of_week: "Monday",
    description: "HeatStroke Prevention",	
		   time: "10:00am",
  },
   {
	  month: "May",
	   date: "19",
     day_of_week: "Tuesday",
    description: "Mask fitting and protocols",	
		   time: "04:55pm",
  },
  ];

//remove all records from Roster, then insert the 'seed' records from above
db.explorerSchedule
  .remove({})
  .then(() => db.explorerSchedule.collection.insertMany(explorer))
  .then(data => {
	console.log("data is \n" + JSON.stringify(data));
    console.log(data.ops.length + " records inserted!");
	process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

 
 