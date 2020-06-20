const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  image: {type:String, data: Buffer},
  link: String,
 
});


const Book = mongoose.model("Book", bookSchema);
module.exports = Book;