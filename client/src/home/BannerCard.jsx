// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./BannerCard.css";
import { EffectCards, Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
const BannerCard = () => {
  const handleNavigate = () => {
    navigate("/shop");
  };
  const navigate = useNavigate();
  return (
    <div className="bannerCard">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Navigation]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide onClick={handleNavigate} />
        <SwiperSlide onClick={handleNavigate} />
        <SwiperSlide onClick={handleNavigate} />
        <SwiperSlide onClick={handleNavigate} />
        <SwiperSlide onClick={handleNavigate} />
      </Swiper>
    </div>
  );
};

export default BannerCard;
