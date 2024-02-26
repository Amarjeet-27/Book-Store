import { useEffect, useState } from "react";
import BookCards from "../components/BookCards";
import SearchBooks from "./SearchBooks";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_BASE_URL}all-book`)
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
        setBooks(data.slice(0, 8));
      });
  }, []);
  return (
    <div>
      <SearchBooks books={books} headline="Your Searched Book" />
      <BookCards books={books} headline="Best Seller Book" />
    </div>
  );
};

export default BestSellerBooks;
