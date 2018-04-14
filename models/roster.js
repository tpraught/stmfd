const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rosterSchema = new Schema({
    //insert model

});

const Roster = mongoose.model("Roster", rosterSchema);

module.exports = Roster;
