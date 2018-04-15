const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rosterSchema = new Schema({
  fire_number:{
	  type: String,
	  trim: true,
	  required: "Fire Number is a required field",
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Fire number field can not be empty."
      ]
  },
  first_name:{
	  type: String,
	  trim: true,
	  required: "First Name is a required field",
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "First Name field can not be empty."
      ]  
  },
  last_name:{
	  type: String,
	  trim: true,
	  required: "Last Name is a required field"
  },
  rank:{
	  type: String,
	  trim: true,
	  required: "Rank is a required field"
  }
});

const Roster = mongoose.model("Roster", rosterSchema);

module.exports = Roster;
