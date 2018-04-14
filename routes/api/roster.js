//All APIs routes
//This file calls a different method from the Controller file for each HTTP call
// Dependencies: Router method on express and Controller file 

const router = require("express").Router();
const rosterController = require("../../controllers/rosterController");//insert controller

// Matches with "/api/books"
router.route("/")
  .get(rosterController.findAll)
  .post(rosterController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(rosterController.findById)
  .put(rosterController.update)
  .delete(rosterController.remove);

module.exports = router;
