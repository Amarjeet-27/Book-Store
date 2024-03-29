import { useContext, useState } from "react";
import BannerCard from "../home/BannerCard";
import { AuthContext } from "../context/AuthProvider";

const Banner = () => {
  const { search, setSearch } = useContext(AuthContext);

  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2  space-y-8 h-full">
          {/*hero text*/}
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books{" "}
            <span className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            rerum praesentium laudantium et placeat? Tenetur libero et
            consectetur dolor soluta, labore facilis deleniti, itaque dolores
            natus sed officia expedita modification.
          </p>
          <div className="">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-2 rounded-3-sm outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        <div className="">
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
