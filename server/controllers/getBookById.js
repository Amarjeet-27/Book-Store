import book from "../modals/bookModal.js";

const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await book.findById(id);
    res.send(data);
  } catch (error) {
    console.log("error in single book fetching");
    res.send(error);
  }
};

export default getBookById;
