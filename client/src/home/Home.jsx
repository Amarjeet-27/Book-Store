import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavouriteBook from "./FavouriteBook";
import OtherBooks from "./OtherBooks";
import PromoBanner from "./PromoBanner";
import Review from "./Review";
// import SearchBooks from "./SearchBooks";

const Home = () => {
  return (
    <div>
      <Banner />

      <BestSellerBooks />
      <FavouriteBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  );
};

export default Home;
