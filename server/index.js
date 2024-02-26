import exprees from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";
import uploadBookController from "./controllers/uploadBookController.js";
import deleteBookById from "./controllers/deleteBookById.js";
import getAllBooks from "./controllers/getAllBooks.js";
import getBookById from "./controllers/getBookById.js";
import updateBookById from "./controllers/updateBookById.js";
const app = exprees();
dotenv.config();
app.use(cors());
app.use(exprees.json());

const CONNECTION_URL = process.env.CONNECTION_URL;
// const CONNECTION_URL =
//   "mongodb+srv://ajchaurasia1214:Amarjeet@cluster0.5vykt9k.mongodb.net/bookStore?retryWrites=true&w=majority";
const PORT = process.env.PORT;
mongoose
  .connect(CONNECTION_URL)
  .then(console.log("Mongodb connected successfully"));

app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/upload-book", uploadBookController);
app.patch("/book/:id", updateBookById);
app.delete("/book/:id", deleteBookById);
app.get("/all-book", getAllBooks);
app.get("/book/:id", getBookById);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
