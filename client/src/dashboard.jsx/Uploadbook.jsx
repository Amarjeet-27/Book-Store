import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

const Uploadbook = () => {
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Science",
    "Fantasy",
    "Horror",
    "History",
    "Bibliography",
    "Autobiography",
    "Travel",
    "Religion",
    "Business",
    "Children Book",
    "Art And Design",
  ];
  const [defaultSelected, setDefaultSelected] = useState(categories[0]);

  const handleCategory = (e) => {
    setDefaultSelected(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target;
    const bookTitle = data.bookTitle.value;
    const author = data.author.value;
    const category = data.category.value;
    const imageUrl = data.imageUrl.value;
    const bookUrl = data.bookUrl.value;
    const description = data.description.value;
    const price = data.price.value;
    const dataObj = {
      bookTitle,
      author,
      category,
      bookUrl,
      imageUrl,
      description,
      price,
    };
    fetch("http://localhost:3001/upload-book", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dataObj),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        alert("Book Uploaded Successfully");
        data.reset();
      });
  };
  return (
    <div className="px-4 my-12 w-full">
      <h2>Upload A Book</h2>
      <form
        onSubmit={handleSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="w-1/2 ">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              name="bookTitle"
              placeholder="Book Name"
              required
            />
          </div>
          <div className="w-1/2 ">
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author" />
            </div>
            <TextInput
              id="author"
              type="text"
              name="author"
              placeholder="Author Name"
              required
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-1/2 ">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput
              id="imageUrl"
              type="text"
              name="imageUrl"
              placeholder="Book Image URL"
              required
            />
          </div>
          <div className="w-1/2 ">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book Category" />
            </div>
            <Select
              id="category"
              name="category"
              className="w-full rounded"
              value={defaultSelected}
              onChange={handleCategory}
            >
              {categories.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookUrl" value="Book PDF URL" />
            </div>
            <TextInput
              id="bookUrl"
              type="string"
              name="bookUrl"
              placeholder="book pdf url"
              required
            />
          </div>
          <div className="w-1/2 ">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price of Book" />
            </div>
            <TextInput
              id="price"
              type="number"
              name="price"
              placeholder="price "
              required
            />
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea
            id="description"
            name="description"
            type="text"
            placeholder="Your book description.."
            required
            className="w-full"
            rows={5}
          />
        </div>

        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default Uploadbook;
