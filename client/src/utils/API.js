import axios from "axios";

export default {
  // Gets all books
  getRoster: function() {
    return axios.get("/api/admin/roster");
  },
  getFrontEndRoster: function() {
    return axios.get("/api/roster");
  },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
  deleteRecord: function(id) {
    console.log("I'll route for deletion")
    return axios.delete("/api/admin/roster/" + id);
  },
  // Saves a book to the database
  saveRecord: function(recordData) {
    console.log("I'm savings this - ", recordData);
    return axios.post("/api/admin/add", recordData);
  },
  editRecord: function(recordData) {
    console.log("I'm editing this - ", recordData);
    return axios.put("/api/admin/roster", recordData);
  },
  saveExplorerEvent: function(eventData) {
    console.log("I'm savings to Explorer Schedule - ", eventData);
    return axios.post("/api/admin/explorerform", eventData);
  },
  getExplorerEvents: function() {
    return axios.get("/api/admin/explorerschedule");
  },
  deleteExplorerEvent: function(id) {
    console.log("I'll delete an explorer event")
    return axios.delete("/api/admin/explorerschedule/" + id);
  },
  getExplorerFrontEndSchedule: function() {
    return axios.get("/api/ExplorerSchedule");
  },
  saveTrainingEvent: function(eventData) {
    console.log("I'm saving a training event", eventData);
    return axios.post("/api/admin/trainingform", eventData);
  },
  getEventsSchedule: function() {
    return axios.get("/api/admin/trainingschedule");
  },
  deleteTrainingEvent: function(id) {
    console.log("I'll delete a training event", id)
    return axios.delete("/api/admin/trainingschedule/" + id);
  },
  getFrontEndSchedule: function() {
    return axios.get("/api/Schedule");
  },
  registerUser: function(data) {
    console.log("Register user", data);
    return axios.post("/api/admin/users/register", data);
  },
  getCurrentUser: function(){
    return axios.get ("/api/admin/users/getCurrentUser")
  },
  loginUser: function(data){
    console.log("Logging in...", data)
    return axios.post("/api/admin/users/login",data)
  },
  logoutUser: function(){
    return axios.get("/api/admin/users/logout")
  }
};
