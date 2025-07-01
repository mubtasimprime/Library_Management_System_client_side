import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";

const Hero = () => {
  return (
    <>
      <Swiper
        className="h-[70vh] overflow-hidden"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img className="w-full h-full object-cover" src={Banner1} alt="" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 bg-black/40 rounded-lg w-[80%] lg:w-[35%]">
              <h2 className="text-3xl font-bold mb-2">
                Unlock a World of Knowledge and Imagination
              </h2>
              <p className="text-lg">
                Discover thousands of books across all genres, ready to inspire
                and inform.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img className="w-full h-full object-cover" src={Banner2} alt="" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 bg-black/40 rounded-lg w-[80%] lg:w-[35%]">
              <h2 className="text-3xl font-bold mb-2">
                Effortless Book Borrowing at Your <br />
                Fingertips
              </h2>
              <p className="text-lg">
                Easily manage book loans, returns, and availability from
                anywhere, anytime.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img className="w-full h-full object-cover" src={Banner3} alt="" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 bg-black/40 rounded-lg w-[80%] lg:w-[35%]">
              <h2 className="text-3xl font-bold mb-2">
                Smart Library Management for Modern Readers
              </h2>
              <p className="text-lg">
                Track your reading, organize collections, and stay connected to
                your library.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
