//All APIs routes
//This file calls a different method from the Controller file for each HTTP call
// Dependencies: Router method on express and Controller file 

const router = require("express").Router();
const rosterController = require("../../controllers/rosterController");//insert controller

// Matches with "/api/roster"
router.route("/roster")
  .get(rosterController.findAll)
  .put(rosterController.update)
  
 router.route("/explorerform")
  .post(rosterController.createExplorer);

  router.route("/explorerschedule")
   .get(rosterController.findAllExplorerEvents)
  
   router.route("/explorerschedule/:id")
  // .get(rosterController.findById)
  .put(rosterController.update)
  .delete(rosterController.removeExplorerEvent);
 

  router.route("/add")
  .post(rosterController.create);

// Matches with "/api/roster/:id"
router.route("/roster/:id")
  // .get(rosterController.findById)
  .put(rosterController.update)
  .delete(rosterController.remove);




module.exports = router;
