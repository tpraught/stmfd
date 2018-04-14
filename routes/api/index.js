//Index API 
//Imports fthe Books API
const router = require("express").Router();
const rosterRoutes = require("./roster");

// Book routes - WHAT DOES THIS DO?????
//=====================================
router.use("/books", rosterRoutes);
//========================================

module.exports = router;
