// sampleBook: function(){
//   return axios.get(
//     "https://www.googleapis.com/books/v1/volumes?q=prideandprejudice" +
       
//       "&key=" + process.env.REACT_APP_GOOGLE_BOOKS_QUEENS
//   )
// },

import axios from "axios";

export default {
    // Get book from google search 
    getGoogleSearchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(savedBooks) {
    return axios.post("/api/books", savedBooks);
  }
};




