///Connection with the DB and seeding with data
//

const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;



mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/firedepartment");

const deptSchedule = [
  {
    month:"January",
    date:"13",
    year:"2018",
   description:"Holiday Party",
   officer_start_time:"5:30pm",
    meeting_start_time:"",
   training_start_time:"",
    drill_code:"M",
    lunch_committee:"lunch committee",
	sort_date_time: "20180113T0530",
  },
   {
    month:"October",
    date:"22",
    year:"2018",
   description:"Night shift rotation transitions",
   officer_start_time:"11pm",
    meeting_start_time:"19:00",
   training_start_time:"",
    drill_code:"M",
    lunch_committee:"Anderson Haldeman",
	sort_date_time: "20181022T2300",
  },
  {
    month:"January",
    date:"10",
    year:"2018",
   description:"Quarterly Meeting And Apparatus",
   officer_start_time:"18:00",
    meeting_start_time:"19:00",
   training_start_time:"",
    drill_code:"M",
    lunch_committee:"Anderson Becker",
	sort_date_time: "20180110T1800",
  },

   {
    month:"February",
    date:"7",
    year:"2017",
   description:"Yearly OSHA Training",
   officer_start_time:"11:30pm",
    meeting_start_time:"",
   training_start_time:"19:00",
    drill_code:"O",
    lunch_committee:"Bullen Case",
	sort_date_time: "20170207T1130",
  },
  ];

//remove all records from Roster, then insert the 'seed' records from above
db.departmentSchedule
  .remove({})
  .then(() => db.departmentSchedule.collection.insertMany(deptSchedule))
  .then(data => {
	console.log("data is \n" + JSON.stringify(data));
    console.log(data.ops.length + " records inserted!");
	process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

 
 