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
  }

};
