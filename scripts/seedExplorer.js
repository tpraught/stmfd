///Connection with the DB and seeding with data
//MODELS NAMES NEED TO BE UPDATED

const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/firedepartment");

const explorer = [
   {
	  month: "May",
	   date: "19",
     day_of_week: "Tuesday",
	   	 year: "2018",
    description: "Mask fitting and protocols",	
		   time: "04:55pm - 06:00pm ",
    sort_date_time: "20180519T1655",
	  event_type: "Department Meeting",
   },
   {
	  month: "April",
	   date: "7",
     day_of_week: "Monday",
	   	 year: "2018",
    description: "County Fair Parade",	
		   time: "04:55pm - 06:00pm ",
    sort_date_time: "20180407T1655",
	  event_type: "Optional Community Event",
   },
   {
	  month: "March",
	   date: "30",
     day_of_week: "Monday",
	   year: "2018",
    description: "First Responder Training",	
		   time: "9:00am",
 sort_date_time: "20180330T0900",
 	 event_type: "Department Meeting",
   },
   {
	  month: "June",
	   date: "27",
     day_of_week: "Tuesday",
	   	 year: "2018",
    description: "Safety gloves protocols",	
		   time: "11:30am - 10:30am ",
    sort_date_time: "20180627T1130",
	  event_type: "Department Meeting",
  },
   {
	  month: "April",
	   date: "6",
     day_of_week: "Monday",
	     year: "2018",
    description: "HeatStroke Prevention",	
		   time: "10:00am",
    sort_date_time: "20180406T1000",
	  event_type: "Department Meeting",		   
  },
  {
	  month: "June",
	   date: "27",
     day_of_week: "Tuesday",
	   	 year: "2018",
    description: "Eye protection protocols",	
		   time: "09am - 10:30am ",
    sort_date_time: "20180627T0900",
	  event_type: "Department Meeting",
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

 
 