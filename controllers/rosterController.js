//Controller 
//It listens to API file, calls the DB and returns result to front-end

const db = require("../models");

// Defining methods for the rosterController
module.exports = {
  findAll: function(req, res) {
    db.Roster
      .find(req.query)
      .sort({ last_name: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllforFrontEnd: function(req, res) {
    db.Roster
      .find(req.query)
      .sort({ rank_sort_number: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Roster
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
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
    db.Roster
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createExplorer: function(req, res) {
      db.explorerSchedule
        .create(req.body)
        .then(console.log("Explorer Event successfully created"))
        .catch(err => res.status(422).json(err));
    },
    findAllExplorerEvents: function(req, res) {
      db.explorerSchedule
        .find(req.query)
        .sort({ sort_date_time: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    removeExplorerEvent: function(req, res) {
        db.explorerSchedule
          .findById({ _id: req.params.id })
          
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    findAllExplorerEventsforFrontEnd:function(req, res) {
        db.explorerSchedule
          .find(req.query)
          .sort({ sort_date_time: 1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    createTrainingEvents: function(req, res) {
        db.departmentSchedule
          .create(req.body)
          .then(console.log("Training Event successfully created"))
          .catch(err => res.status(422).json(err));
    },
    findAllScheduleEvents: function(req, res) {
      db.departmentSchedule
        .find(req.query)
        .sort({ sort_date_time: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    removeTrainingEvent: function(req, res) {
        db.departmentSchedule
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findAllEventsforFrontEnd:function(req, res) {
        db.departmentSchedule
          .find(req.query)
          .sort({ sort_date_time: 1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    createUser: function(req, res) {
      db.User
        .create(req.body)
        .then(console.log("Record successfully created"))
        .catch(err => res.status(422).json(err));
    }  
};
