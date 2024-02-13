import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, author, imageUrl, bookTitle, description, price } =
    useLoaderData();
  const [data, setData] = useState(1);
  const [cost, Setcost] = useState(price);

  const handleDecrement = () => {
    let hue = data - 1;

    if (hue === 0) hue = 1;
    setData(hue);
    Setcost(price * hue);
  };

  const handleIncrement = () => {
    let hue = data + 1;
    setData(hue);
    console.log(data);
    Setcost(price * hue);
  };
  return (
    <div className="mt-28 md:px-[4rem] lg:px-24 flex gap-[1rem] sm:flex-col sm:justify-center md:flex-row ">
      <div className="w-[100%] flex justify-center">
        <img src={imageUrl} alt="book img" className="max-h-[70vh]" />
      </div>
      <div className="">
        <div className="mb-20">
          <h1 className="text-4xl font-bold text-gray-600 mb-4">{bookTitle}</h1>
          <h3 className="flex items-center gap-2 font-normal text-sm">
            <svg
              className="w-5 h-5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"
              />
            </svg>
            <p className="text-[1rem]"> {author}</p>
          </h3>
        </div>
        <div className="flex items-center  mb-5 gap-3">
          <h3 className="neutral-600 text-neutral-600 font-normal text-2xl ">
            Quantity :
          </h3>
          <div className="flex items-center justify-center  gap-4">
            <button
              onClick={handleDecrement}
              className="font-bold bg-orange-600 cursor-pointer rounded-lg flex justify-center items-center px-4 xl:py-4 border-1 text-white w-4 h-4"
            >
              -
            </button>
            <span className="text-lg ">{data}</span>
            <button
              onClick={handleIncrement}
              className="font-bold bg-orange-600 cursor-pointer rounded-lg flex justify-center items-center px-4  xl:py-4 border-1 text-white w-4 h-4"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex ">
          <div className=" flex gap-3 px-5 py-4 rounded-[.5rem] items-center mb-5 border-2 ">
            <h2 className="text-neutral-800 text-2xl ">Total cost</h2>
            <p className="text-orange-600 text-2xl">$ {cost}</p>
          </div>
        </div>
        <div className="flex  items-center gap-5">
          <button className="font-bold  bg-orange-600 cursor-pointer rounded-lg justify-center items-center px-6 py-[12px] xl:py-4 border-0  uppercase w-44  text-white">
            Add to cart
          </button>
          <button className="font-bold  bg-orange-600 cursor-pointer rounded-lg justify-center items-center px-6 py-[12px] xl:py-4 border-0  uppercase w-44  text-white">
            Buy Now
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-neutral-800 text-base">Description</h2>
          <p className="text-neutral-500 font-normal text-sm ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
