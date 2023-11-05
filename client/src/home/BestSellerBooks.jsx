import { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/all-book")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)));
    // console.log(books);
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Best Seller Book" />
    </div>
  );
};

export default BestSellerBooks;
