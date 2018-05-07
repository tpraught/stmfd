//This date_time_sort_utility.js script contains/exports a function called getScheduleSortDate.
//getScheduleSortDate takes as input four parameters -  year, month, date, and time.
//The function returns the date/time represented by those parameters in  a YYYYMMDDTHHMM format.
//For example if the parameters passed into the function are as follows -> 
//         getScheduleSortDate("2003", "January", "30", "9am"),
//    then the function returns the string  "20030130T0900"
//
//This  string format/representation of the date/time is useful for sorting dates in chronological order
//when using a string/alphanumeric sort.
//If the time parameter passed in contains a range of times, then the function returns the 
// YYYYMMDDTHHMM value for the start/first time only. e.g.  If the input time is "11:30am - 2:30pm",
//then the return value for the time portion of the returned string  is "T1130". 
//The output date/time strings generated from getScheduleSortDate are stored as a special sort field 
//of each 'event' record, such that lists for scheduled events returned from the database
// can be sorted in chronological order.

//Assign a two digit string representation for each month
  var monthValues = {
	  jan:"01",
	  feb:"02",
	  mar:"03",
	  apr:"04",
	  may:"05",
	  jun:"06",
	  jul:"07",
	  aug:"08",
	  sep:"09",
	  oct:"10",
	  nov:"11",
	  dec:"12",
  }
 
//function getFormattedMonthNum - given a month name as input, return the string representation for that month.
//For example given an input of "March" it will return "03", given input of "October" it will return "10".
//If the month name passed in is not recognized, then it returns "01" for the month of january.
   export const   getFormattedMonthNum = (month) => {
     // console.log("month is " + month);
	 // console.log("monthValues is " + JSON.stringify(monthValues));
	  let result = "";
	  var monthLower = month.toLowerCase();
	  if (monthLower.includes("jan")){
		  result = monthValues.jan;
	  }
	  else if (monthLower.includes("feb")){
		  result = monthValues.feb;
	  }
	  else if (monthLower.includes("mar")){
		  result = monthValues.mar;
	  }
	  else if (monthLower.includes("apr")){
		  result = monthValues.apr;
	  }
	  else if (monthLower.includes("may")){
		  result = monthValues.may;
	  }
	  else if (monthLower.includes("jun")){
		  result = monthValues.jun;
	  }
	  else if (monthLower.includes("jul")){
		  result = monthValues.jul;
	  }
	  else if (monthLower.includes("aug")){
		  result = monthValues.aug;
	  }
	  else if (monthLower.includes("sep")){
		  result = monthValues.feb;
	  }
	  else if (monthLower.includes("oct")){
		  result = monthValues.oct;
	  }
	  else if (monthLower.includes("nov")){
		  result = monthValues.nov;
	  }
	  else if (monthLower.includes("dec")){
		  result = monthValues.dec;
	  }

	  else {
		  result = monthValues.jan;
	  }

	  return result;
  }
  
  //function formatToTwoDigit - given as input a string that represents a single digit, 
  //return a string that prepends the input string with a '0' character.
  // For example if  "2" is passed in, then return "02".  The function is used for zero padding 
   //single digits used to represent a month or date.  
   export const   formatToTwoDigit = (instr) => {
	  let result = instr;
	  if (instr.length === 1){
		  result = "0" + instr;
	  }
	  return result;
   }
  
  //function getFormattedTime - given as input a string that represents 'clock' time of day, 
  // return a 5 character 'military-like' representation of that input time, prefixed with the letter "T".
  //For example  if the input is  "4:30pm" then the function will return "T1630" 
  //If the input is "4" ,then the function will return "T0400".  If the input is "4PM" then
  //the function will return "T1600". 
  //If the input string consists of a time range (e.g. "11:30am - 2:30pm") then the function
  //returns that military like representation of the start time (e.g. if input of "11:30am - 2:30pm",
  //then return "T1130".
  //If the time is an empty string  then the function returns a hard coded "T1200MISSING"
   export const   getFormattedTime = (time) => {
	  let result="";
	  var formatted_hour="";
	  var formatted_min="";	  
	  
	  if (time.trim().length == 0){
		  //console.log("No time was passed in");
		  return("T1200MISSING");
	  }
	  let timeFirstPart = "";
	  let trimmedTime = time.trim();
	  //remove embedded spaces
	  trimmedTime = trimmedTime.replace(/[ ]/g,'');
	  timeFirstPart = trimmedTime;
	  //if time consists of a time range, then only use the first/start time mentioned 
	  if (trimmedTime.includes("-")){
		   var splitTime = trimmedTime.split("-");
		   timeFirstPart = splitTime[0];
	  }
      //console.log("input time str is " + time);
	  var lowerTime = timeFirstPart.toLowerCase();
	  var containsPM = lowerTime.includes("p");
	  var containsAM = lowerTime.includes("a");
	  var numericTime = lowerTime.replace(/[a-zA-Z ]/g,'');
	  //console.log("numeric time is " + numericTime);
	  var splitResult = numericTime.split(":");
	  //console.log("For time = " + time + " the number of parts is " + splitResult.length);
	  //console.log("the split array is " + splitResult);
	  var len = splitResult.length;
	  if (len === 1){
		  if (splitResult[0].length == 4){
			  var hour = splitResult[0].substring(0,2);
			  //console.log("the hour is " + hour);
		      if (containsPM && (!(hour == "12"))){
				  
			       var intNum = Number(hour);
			       var add12 = intNum + 12;
			       var strHour = add12.toString();
			       formatted_hour = strHour;
				   formatted_min = "00";
				   
		      }
			  else{
				  formatted_hour = hour;
				  if ((hour == "12") && (containsAM)){
				      formatted_hour = "00";
				  }
				  else if ((hour == "12") && (containsPM)){
				      formatted_hour = hour;
				  }
			      var a_min = splitResult[0].substring(2);
			      formatted_min = formatToTwoDigit(a_min);
			  }
		  }
		  else {
		      var hour = formatToTwoDigit(splitResult[0]);
		      if (containsPM && (!(hour == "12"))){
			      var intNum = Number(hour);
			      var add12 = intNum + 12;
			      var strHour = add12.toString();
			      formatted_hour = strHour;
				  formatted_min = "00";
				  
		      }
		      else {
		          formatted_hour = hour;
				  if ((hour == "12") && (containsAM)){
				      formatted_hour = "00";
				  }
				  else if ((hour == "12") && (containsPM)){
				      formatted_hour = hour;
				  }
				  formatted_min = "00";
		      }
              
		  }
		  
	  }
	  else if (len > 1) {
		  var hour = formatToTwoDigit(splitResult[0]);
		  if (containsPM && (!(hour == "12"))){
			  var intNum = Number(hour);
			  var add12 = intNum + 12;
			  var strHour = add12.toString();
			  formatted_hour = strHour;
		  }
		  else {
		     formatted_hour = hour;
		  }
          formatted_min = formatToTwoDigit(splitResult[1]);

	  }
	  result = "T" + formatted_hour + formatted_min;


      return result;

  }
  
  //function getScheduleSortDate - given as input a year, month, date, and time, the function returns the date/time
  // in a YYYYMMDDTHHMM format.
  //For example if the call parameters are getScheduleSortDate("2003", "January", "30", "9am"), then the 
  //string returned is "20030130T0900"
    export const getScheduleSortDate = (year, month, date, time) => {
	  var result = year + getFormattedMonthNum(month) +  formatToTwoDigit(date) + getFormattedTime(time);
	  return result;
  }

 //set runtests var  to true to run the tests
var runtests = false;	  
if (runtests == true){ 
  
  let atime = getFormattedTime("0510");
  console.log("translated time for 0510 is " + atime);
  
  atime = getFormattedTime("06:30");
  console.log("translated time for 06:30 is " + atime);
   
  atime = getFormattedTime("06:30 PM");
  console.log("translated time for 06:30PM is " + atime);

  atime = getFormattedTime("5 PM");
  console.log("translated time for 5 PM is " + atime);  
    
  atime = getFormattedTime("5");
  console.log("translated time for 5 is " + atime);  

  atime = getFormattedTime("0000");
  console.log("translated time for 0000 is " + atime); 

  atime = getFormattedTime("0AM");
  console.log("translated time for 0AM is " + atime); 

  atime = getFormattedTime("12AM");
  console.log("translated time for 12AM is " + atime);    

  atime = getFormattedTime("1200AM");
  console.log("translated time for 1200AM is " + atime); 

  atime = getFormattedTime("1200");
  console.log("translated time for 1200 is " + atime);   

 atime = getFormattedTime("12:00");
  console.log("translated time for 12:00 is " + atime);  
  
    atime = getFormattedTime("12:00PM");
  console.log("translated time for 12:00PM is " + atime);  
  
   atime = getFormattedTime("12PM");
  console.log("translated time for 12PM is " + atime); 

   atime = getFormattedTime("12 PM");
  console.log("translated time for 12 PM is " + atime);  

   atime = getFormattedTime("1:00 AM");
  console.log("translated time for 1:00 AM is " + atime);
  
  atime =  getScheduleSortDate("2018", "May", "1", "13:00");
  console.log("translated date - 2018 May 1 13:00  to " + atime);
  
   atime = getScheduleSortDate("2017", "July", "17", "1PM");
  console.log("translated date - 2017 July 21 1PM  to " + atime);
  
    atime = getScheduleSortDate("2000", "January", "30", "2:00 PM");
  console.log("translated date - 2000 January 30 2:00 PM  to " + atime);
  
    atime = getScheduleSortDate("2000", "January", "30", "");
  console.log("translated date - 2000 January 30 <no time> to " + atime);
 
    atime = getScheduleSortDate("2000", "January", "30", "7:00am - 9:30pm");
  console.log("translated date range - 2000 January 30 7:00am - 9:30pm to " + atime);
  
   atime = getScheduleSortDate("2000", "January", "30", "7:00am - 9:30pm");
  console.log("translated date range - 2000 January 30 7:00am - 9:30pm to " + atime);
 
   atime = getScheduleSortDate("2000", "January", "30", "9am - 1:30pm");
  console.log("translated date range - 2000 January 30 9am - 1:30pm to " + atime);
  
   atime = getScheduleSortDate("2000", "January", "30", "1:00pm - 10:00pm");
  console.log("translated date range - 2000 January 30 1:00pm - 11:59pm to " + atime);
}

//module.exports = getScheduleSortDate;
 
 
 