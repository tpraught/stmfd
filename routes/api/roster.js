//BackEnd APIs routes

const router = require("express").Router();
const rosterController = require("../../controllers/rosterController");//insert controller

// Roster HTTP Calls
router.route("/roster")
  .get(rosterController.findAll)
  .put(rosterController.update)

  router.route("/add")
  .post(rosterController.create);

  router.route("/roster/:id")
    .put(rosterController.update)
    .delete(rosterController.remove);
  

// Admin Training Schedule
  router.route("/trainingform")
   .post(rosterController.createTrainingEvents);

   router.route("/trainingschedule")
    .get(rosterController.findAllScheduleEvents)

       
   router.route("/trainingschedule/:id")
    .delete(rosterController.removeTrainingEvent); 


  // Admin Explorer HTTP methods
  router.route("/explorerform")
  .post(rosterController.createExplorer);

  router.route("/explorerschedule")
   .get(rosterController.findAllExplorerEvents)
   
   router.route("/explorerschedule/:id")
   .delete(rosterController.removeExplorerEvent); 

//    Admin user
    router.route("/register")
    .post(rosterController.createUser);
  

 
 

  




module.exports = router;
