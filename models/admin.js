const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email:{
	  type: String,
	  trim: true,
	  required: "Email is a required field",
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Email field can not be empty."
      ]  
  },
  password:{
	  type: String,
	  trim: true,
	  required: "Password is a required field",
	  validate: [
      // Function takes in the new  value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 0;
      },
      //Error Message
      "Password field can not be empty."
      ]  
  },

});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
