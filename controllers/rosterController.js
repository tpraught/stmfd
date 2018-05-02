//Controller 
//It listens to API file, calls the DB and returns result to front-end

const db = require("../models");

// Defining methods for the rosterController
module.exports = {
  findAll: function(req, res) {
	console.log("Getting fire fighters");
	//console.log("req is ");
	//console.log(req);
    db.Roster
      .find(req.query)
      .sort({ last_name: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
	//  console.log("res is ");
	//  console.log(res);
  },
  findAllforFrontEnd: function(req, res) {
	console.log("Front End Roster");

    db.Roster
      .find(req.query)
      .sort({ rank_sort_number: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
	//  console.log("res is ");
	//  console.log(res);
  },
  findById: function(req, res) {
	console.log("in findById");
    db.Roster
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
	console.log(req.body);
    db.Roster
      .create(req.body)
      .then(console.log("Record successfully created"))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
  console.log("I'm updating a fire fighter",req.body.id);	  
  
  let updatedFireFighter = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    fire_number: req.body.fire_number,
    year_started: req.body.year_started,
    title: req.body.title,
    rank: req.body.rank,
    station: req.body.station,
    company: req.body.company
  }
    console.log(updatedFireFighter);

    db.Roster
      .findByIdAndUpdate(req.body.id, updatedFireFighter)
      .then(console.log("Record updated"))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
	console.log(req.params.id);	  
	console.log("About tp remove record");	  
    db.Roster
      .findById({ _id: req.params.id })
      
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createExplorer: function(req, res) {
    console.log(req.body);
      db.explorerSchedule
        .create(req.body)
        .then(console.log("Explorer Event successfully created"))
        .catch(err => res.status(422).json(err));
    },
    findAllExplorerEvents: function(req, res) {
      console.log("Getting explorer events");
       db.explorerSchedule
          .find(req.query)
          .sort({ month: 1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      //  console.log("res is ");
      //  console.log(res);
      },
      removeExplorerEvent: function(req, res) {
        console.log(req.params.id);	  
        console.log("About to remove explorer record");	  
          db.explorerSchedule
            .findById({ _id: req.params.id })
            
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },

      findAllExplorerEventsforFrontEnd:function(req, res) {
        console.log("Getting explorer events for front end");
         db.explorerSchedule
            .find(req.query)
            .sort({ month: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        //  console.log("res is ");
        //  console.log(res);
        } 
};
