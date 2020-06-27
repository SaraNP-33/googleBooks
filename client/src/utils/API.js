import axios from "axios";

export default {
  // sampleBook: function(){
  //   return axios.get(
  //     "https://www.googleapis.com/books/v1/volumes?q=prideandprejudice" +
       
  //       "&key=" + process.env.REACT_APP_GOOGLE_BOOKS_QUEENS
  //   )
  // },
  Random: function (bookTitle) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        bookTitle +
        "&key=" + process.env.REACT_APP_GOOGLE_BOOKS_QUEENS
    );
  } , 

  saveBook:function(bookData){
    return axios.post("/api/books", bookData);
  },

  findBookd: function(){
    return axios.get("/api/books")
  }
  
};




