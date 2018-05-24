//Authenticaion API routes
const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/register")
 .post(userController.doRegister);

// api route for login action
router.post('/login', userController.doLogin);

// api route for logout action
router.get('/logout', userController.logout);

// api rout to get current user
router.get('/getCurrentUser', userController.getCurrentUser);

// api rout to update current user
router.put('/:id', userController.updateUser);

module.exports = router;
