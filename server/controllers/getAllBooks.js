import book from "../modals/bookModal.js";

const getAllBooks = async (req, res) => {
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
};

export default getAllBooks;
