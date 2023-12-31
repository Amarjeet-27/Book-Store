import { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/all-book")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(5, 10)));
    // console.log(books);
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  );
};

export default OtherBooks;
