import book from "../modals/bookModal.js";

const updateBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedData = await book.findByIdAndUpdate(id, data, { new: true });
    res.send(updatedData);
  } catch (error) {
    console.log("Error in updating section");
    res.send(error);
  }
};

export default updateBookById;
