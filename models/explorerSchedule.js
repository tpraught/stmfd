const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const explorerScheduleSchema = new Schema({
  month:{
	  type: String,
	  trim: true,
	  required: true,
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Month field can not be empty."
      ]  
  },
  date:{
	  type: String,
	  trim: true,
	  required: true,
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Date field can not be empty."
      ]  

  },
   day_of_week:{
	  type: String,
	  trim: true,
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Day of the week field can not be empty."
      ]
  },
   year:{
	  type: String,
	  trim: true,
	  required: true,
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Year field can not be empty."
      ]  
	  
  },
    description:{
	  type: String,
	  trim: true,
	  required: true,
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Description field can not be empty."
      ]  
	  
  },
     time:{
	  type: String,
	  trim: true,
	  required: false,
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Time field can not be empty."
      ]  
	  
  },
     sort_date_time:{
	  type: String,
	  trim: true,
	  required: false,
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "sort_date_time field can not be empty."
      ]   
  },
     event_type:{
	  type: String,
	  trim: true,
	  required: true,
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "event_type field can not be empty."
      ]   
  },
});

const explorerSchedule = mongoose.model("ExplorerSchedule", explorerScheduleSchema);

module.exports = explorerSchedule;
