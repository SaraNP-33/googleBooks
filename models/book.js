const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: Array, required: true, unique: true },
  description: String,
  image: {type: String, trim: true, unique: true},
  link: {type: String, trim: true, unique: true},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;