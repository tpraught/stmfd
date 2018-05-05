const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentScheduleSchema = new Schema({
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

    officer_start_time:{
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
      "Officer Start Time field can not be empty."
      ]  
	  
  },
    meeting_start_time:{
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
      "Meeting Start Time field can not be empty."
      ]  
  },
    training_start_time:{
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
      "training_start_time field can not be empty."
      ]   
  },
   drill_code:{
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
      "drill_code field can not be empty."
      ]   
  },
    lunch_committee:{
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
      "Lunch Committee field can not be empty."
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
});

const departmentSchedule = mongoose.model("departmentSchedule", departmentScheduleSchema);

module.exports = departmentSchedule;

