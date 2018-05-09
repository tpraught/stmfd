//Front-End routes

const router = require("express").Router();
const rosterController = require("../../controllers/rosterController");//insert controller

// Matches with "/roster"
router.route("/roster")
  .get(rosterController.findAllforFrontEnd)

  router.route("/medicalroster")
  .get(rosterController.findAllforFrontEnd)
  
  router.route("/ExplorerSchedule")
  .get(rosterController.findAllExplorerEventsforFrontEnd)

  router.route("/Schedule")
  .get(rosterController.findAllEventsforFrontEnd)


module.exports = router;