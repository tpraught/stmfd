//Index API 
//Imports fthe Books API
const router = require("express").Router();
const rosterRoutes = require("./roster");
const htmlRoutes = require("./htmlRoutes");
const userRoutes = require ("./users")

//=====================================
router.use("/admin", rosterRoutes);
router.use("/", htmlRoutes);
router.use("/admin/users", userRoutes);
//========================================

module.exports = router;
