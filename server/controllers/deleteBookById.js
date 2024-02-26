import book from "../modals/bookModal.js";

const deleteBookById = async (req, res) => {
  try {
    const id = req.params.id;
    await book.deleteOne({ _id: id }); //return status true if id is found else return  false
    const val = await book.find();
    res.send(val);
  } catch (error) {
    console.log("Error in delete section");
    res.send(error);
  }
};

export default deleteBookById;
