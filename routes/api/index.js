//Index API 
//Imports fthe Books API
const router = require("express").Router();
const rosterRoutes = require("./roster");
const htmlRoutes = require("./htmlRoutes");

// Book routes - WHAT DOES THIS DO?????
//=====================================
router.use("/admin", rosterRoutes);
router.use("/", htmlRoutes);
//========================================

module.exports = router;
