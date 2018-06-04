//Authenticaion API routes
const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/register")
 .post(userController.register);

// api route for login action
router.route("/login")
.post(userController.login);

// api route for logout action
router.route("/logout")
.get(userController.logout);


// api rout to get current user
router.route("/getCurrentUser")
 .get(userController.getCurrentUser);

module.exports = router;
