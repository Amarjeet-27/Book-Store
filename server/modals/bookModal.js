import mongoose from "mongoose";

const bookSchema = {
  bookTitle: { type: String },
  author: { type: String },
  category: { type: String },
  imageUrl: { type: String },
  description: { type: String },
  bookUrl: { type: String },
  price: { type: Number },
};
const book = mongoose.model("books", bookSchema);

export default book;
