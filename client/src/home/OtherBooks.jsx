import { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_BASE_URL}all-book`)
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(3, 10)));
    // console.log(books);
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  );
};

export default OtherBooks;
