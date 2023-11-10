import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
// import BestSellerBooks from "../home/BestSellerBooks";
const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/all-book")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const naviagte = useNavigate();
  const handleClick = (e) => {
    naviagte(`/book/${e}`);
    // console.log(e);
  };
  return (
    <div>
      <div className="mt-[4rem]">
        <h2 className="text-5xl font-bold text-center">
          All the Books are here
        </h2>
        <div className="grid gap-8 my-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {books.map((book) => (
            <Card key={book._id}>
              <img src={book.imageUrl} alt="" className="h-96" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{book.bookTitle}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {book.description}
              </p>

              <button
                onClick={() => handleClick(book._id)}
                className="bg-blue-700 font-semibold text-white py-2 rounded"
              >
                Buy Now
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
