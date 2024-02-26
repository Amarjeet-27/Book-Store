import book from "../modals/bookModal.js";

const uploadBookController = async (req, res) => {
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
};

export default uploadBookController;
