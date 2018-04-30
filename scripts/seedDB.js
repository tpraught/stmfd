///Connection with the DB and seeding with data
//MODELS NAMES NEED TO BE UPDATED

const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;



mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/firedepartment");

const roster = [
   {
	  first_name: "Steve",
	   last_name: "Hosch",
     fire_number: "16",
    year_started: "1999",	
		   title: "Fire Chief",
rank_sort_number: 10,
		    rank: "Officer",
		 station: "Station #1",
		 company: "n/a",
  },
  {
	  first_name: "Gordy",
	   last_name: "Dehmer",
     fire_number: "3",
    year_started: "1983",	
		   title: "Assistant Chief",
rank_sort_number: 20,		   		   
		    rank: "Officer",
		 station: "Station #1",
		 company: "n/a",
  },
  {
	  first_name: "Joe",
	   last_name: "Haller",
     fire_number: "20",
    year_started: "2005",	
		   title: "District Chief",
rank_sort_number: 30,		   
		    rank: "Officer",
		 station: "Station #2",
		 company: "n/a",
  },
  {
	  first_name: "Kevin",
	   last_name: "Vogel",
     fire_number: "19",
    year_started: "2004",	
		   title: "Captain",
rank_sort_number: 40,		   
		    rank: "Officer",
		 station: "Station #1",
		 company: "Company 'A'",
  },
  {
	  first_name: "Eric",
	   last_name: "Bullen",
     fire_number: "26",
rank_sort_number: 40,		   	 
    year_started: "2000",	
		   title: "Captain",			  
		    rank: "Officer",
		 station: "Station #1",
		 company: "Company 'B'",
  },
  {
	  first_name: "Grant",
	   last_name: "Sahr",
     fire_number: "13",
rank_sort_number: 40,		   	 
    year_started: "2007",	
		   title: "Captain",			  
		    rank: "Officer",
		 station: "Station #1",
		 company: "Station #1",
  },
   {
	  first_name: "Shane",
	   last_name: "Suchy",
     fire_number: "27",
    year_started: "2004",	
		   title: "Captain",
rank_sort_number: 40,		   		   
		    rank: "Officer",
		 station: "Station #1",
		 company: "Company 'A'",
  },
    {
	  first_name: "Kyle",
	   last_name: "Gammell",
     fire_number: "28",
    year_started: "2008",	
		   title: "Lieutenant",
rank_sort_number: 50,		   		   
		    rank: "Officer",
		 station: "Station #1",
		 company: "Company 'B'",
  },
    {
	  first_name: "Steve",
	   last_name: "Gutknecht",
     fire_number: "17",
    year_started: "2002",	
		   title: "Lieutenant",
rank_sort_number: 50,		   
		    rank: "Officer",
		 station: "Station #1",
		 company: "Company 'C'",
  },
    {
	  first_name: "Roland",
	   last_name: "Anderson",
     fire_number: "21",
    year_started: "1999",	 
		   title: "",			  
		    rank: "Firefighter",
		 station: "Station #1",
		 company: "Company 'A'",
  },
    {
	  first_name: "Greg",
	   last_name: "Becker",
     fire_number: "10",
    year_started: "1990",	 
		   title: "",			  
		    rank: "Firefighter",
		 station: "Station #1",
		 company: "Company 'A'",
  },
    {
	  first_name: "Aaron",
	   last_name: "Case",
     fire_number: "7",
    year_started: "2008",	 
		   title: "",			  
		    rank: "Firefighter",
		 station: "Station #1",
		 company: "Company 'A'",
  },
    {
	  first_name: "Jim",
	   last_name: "Eicher",
     fire_number: "30",
    year_started: "2002",	 
		   title: "",			  
		    rank: "Firefighter",
		 station: "Station #1",
		 company: "Company 'B' ",
  },
    {
	  first_name: "Chris",
	   last_name: "Etnier",
     fire_number: "9",
    year_started: "2014",	 
		   title: "",			  
		    rank: "Firefighter",
		 station: "Station #1",
		 company: "Company 'A'",
  },
    {
	  first_name: "Tim",
	   last_name: "Fiedler",
     fire_number: "18",
    year_started: "2008",	 
		   title: "",			  
		    rank: "Firefighter",
		 station: "Station #2",
		 company: "n/a",
  },
    {
	  first_name: "Scott",
	   last_name: "Follett",
     fire_number: "12",
    year_started: "2000",	 
		   title: "",			  
		    rank: "Firefighter",
		 station: "Station #2",
		 company: "n/a",
  },

  ];

//remove all records from Roster, then insert the 'seed' records from above
db.Roster
  .remove({})
  .then(() => db.Roster.collection.insertMany(roster))
  .then(data => {
	console.log("data is \n" + JSON.stringify(data));
    console.log(data.ops.length + " records inserted!");
	process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

 
 