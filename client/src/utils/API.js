import axios from "axios";

export default {
  // Gets all books
  getRoster: function() {
    return axios.get("/api/admin/roster");
  },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
  deleteRecord: function(id) {
    console.log("I'll route for deletion")
    return axios.delete("/api/admin/roster/" + id);
  }
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
