const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rosterSchema = new Schema({
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
	  required: "Last Name is a required field",
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
   year_started:{
	  type: String,
	  trim: true,
	  required: "Year Started is a required field",
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
    title:{
	  type: String,
	  trim: true,
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Title field can not be empty."
      ]  
	  
  },
  rank:{
	  type: String,
	  trim: true,
	  required: "Rank is a required field",
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Rank field can not be empty."
      ]
	  
	  },
  station:{
	  type: String,
	  trim: true,
	  required: "Station is a required field",
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Station field can not be empty."
      ]
	  },
  company:{
	  type: String,
	  trim: true,
	  required: "Company is a required field",
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Company field can not be empty."
      ]
	  },

});

const Roster = mongoose.model("Roster", rosterSchema);

module.exports = Roster;
