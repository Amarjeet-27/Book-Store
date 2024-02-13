import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "./searchBook.css";
import { FaCartShopping } from "react-icons/fa6";

const getItems = (books, search) => {
  if (!search) {
    return [];
  }

  return books.filter((book) =>
    book.bookTitle
      .replaceAll(" ", "")
      .toLowerCase()
      .includes(search.replaceAll(" ", "").toLowerCase())
  );
};
const SearchBooks = ({ books, headline }) => {
  const [data, setData] = useState([]);
  const { search, setSearch } = useContext(AuthContext);
  const filteredItems = getItems(books, search);

  return (
    <div className="Search">
      {filteredItems.length > 0 && (
        <div className="mt-4 mb-16 px-4 lg:px-24 bg-red-200-100">
          <h2 className="text-5xl py-5 text-center font-bold text-red-600 my-5">
            {headline}
          </h2>

          <div className="bookCards mt-22">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
              {filteredItems.map((val) => (
                <SwiperSlide key={val._id}>
                  <Link to={`/book/${val._id}`} className="my-5">
                    <div className="relative">
                      <img src={val.imageUrl} alt="image" />
                      <div className="absolute  top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded">
                        <FaCartShopping className="w-4 h-4 text-white" />{" "}
                      </div>
                    </div>

                    <div className="text-left ml-3">
                      <div className="">
                        <h3>{val.bookTitle}</h3>
                        <p>{val.author}</p>
                      </div>
                      <div className="">
                        <p>Price:$200</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {filteredItems.length === 0 && search.length > 0 && (
        <h1 className="text-5xl py-5 bg-red-600 text-center  font-bold text-red-700-600 my-5">
          No Book Found
        </h1>
      )}
    </div>
  );
};

export default SearchBooks;
