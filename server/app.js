import exprees from "express";
import mongoose from "mongoose";
import cors from "cors";
import book from "./modals/bookModal.js";
const app = exprees();
// app.use(
//   cors({
//     origin: [],
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );
app.use(cors());
app.use(exprees.json());

const CONNECTION_URL = "mongodb://localhost:27017/Book-Store";
// const CONNECTION_URL =
//   "mongodb+srv://ajchaurasia1214:Amarjeet@cluster0.5vykt9k.mongodb.net?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;
mongoose
  .connect(CONNECTION_URL)
  .then(console.log("Mongodb connected successfully"));

// const bookSchema = {
//   bookTitle: { type: String },
//   author: { type: String },
//   category: { type: String },
//   imageUrl: { type: String },
//   description: { type: String },
//   bookUrl: { type: String },
//   price: { type: Number },
// };
// const book = mongoose.model("books", bookSchema);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/upload-book", async (req, res) => {
  try {
    const data = req.body;
    const result = new book(data);
    await result.save();
    const val = await book.find();
    res.send(result).status(200);
  } catch (error) {
    console.log("error in upload book section");
    res.send(error);
  }
});
// app.get("/all-book", async (req, res) => {
//   try {
//     const val = await book.find();
//     console.log(val);
//     res.send(val);
//   } catch (error) {
//     console.log("error in geting book section");
//     res.send(error).status(404);
//   }
// });

app.patch("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedData = await book.findByIdAndUpdate(id, data, { new: true });
    res.send(updatedData);
  } catch (error) {
    console.log("Error in updating section");
    res.send(error);
  }
});

app.delete("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await book.deleteOne({ _id: id }); //return status true if id is found else return  false
    const val = await book.find();
    res.send(val);
  } catch (error) {
    console.log("Error in delete section");
    res.send(error);
  }
});

//  search filter

app.get("/all-book", async (req, res) => {
  try {
    let query = {};
    if (req.query?.category) {
      query = { category: req.query.category };
    }
    const val = await book.find(query);
    res.send(val);
  } catch (error) {
    console.log("error in filtering section");
    res.send(error);
  }
});

// to get single book

app.get("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await book.findById(id);
    res.send(data);
  } catch (error) {
    console.log("error in single book fetching");
    res.send(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
