//Authenticaion API routes
const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/register")
 .post(userController.doRegister);

// api route for login action
router.route("/login")
.post(userController.doLogin);

// api route for logout action
router.route("/logout")
.get(userController.logout);


// api rout to get current user
router.route("/getCurrentUser")
 .get(userController.getCurrentUser);

// api rout to update current user
router.put('/:id', userController.updateUser);

module.exports = router;
