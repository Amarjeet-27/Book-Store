import { useEffect, useState } from "react";
import BookCards from "../components/BookCards";
import SearchBooks from "./SearchBooks";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/all-book")
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
        setBooks(data.slice(0, 8));
      });
    // console.log(books);
  }, []);
  return (
    <div>
      <SearchBooks books={books} headline="Your Searched Book" />
      <BookCards books={books} headline="Best Seller Book" />
    </div>
  );
};

export default BestSellerBooks;
