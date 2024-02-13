import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./bookCards.css";
import { FaCartShopping } from "react-icons/fa6";

const BookCards = (e) => {
  // console.log(e.books);
  return (
    <div className="my-10 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {e.headline}
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
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {e.books.map((val) => (
            <SwiperSlide key={val._id}>
              <div className="my-5">
                <div className="relative">
                  <img src={val.imageUrl} alt="image" className="" />
                  <div className="absolute  top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded">
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="text-left ml-3 text-gray-500">
                  <div>
                    <h3>{val.bookTitle}</h3>
                    <p>{val.author}</p>
                  </div>
                  <div>
                    <p>Price:${val.price}</p>
                  </div>
                </div>
                <Link to={`/book/${val._id}`}>
                  <button className="w-[100%] bg-blue-700 font-semibold text-white py-2 rounded">
                    BUY NOW
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
