import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const feedbacks = [
    {
      _id: 1,
      readerImg: "https://i.ibb.co.com/cSQky5Vf/Screenshot-10.png",
      readerName: "Sajid Rahman",
      readerEmail: "sajid@gmail.com",
      rating: 5,
      description:
        "The library system is very user-friendly. I can easily search and borrow books without any hassle.",
    },
    {
      _id: 2,
      readerImg: "https://i.ibb.co.com/fzhzd1cX/Screenshot-12.png",
      readerName: "Sumon Sheikh",
      readerEmail: "sumon@gmail.com",
      rating: 4,
      description:
        "I appreciate the detailed catalog and easy tracking of borrowed books. The notification system is also helpful.",
    },
    {
      _id: 3,
      readerImg: "https://i.ibb.co.com/6Rgp6qhC/Screenshot-11.png",
      readerName: "Mashiur Rahman",
      readerEmail: "mashiur@gmail.com",
      rating: 5,
      description:
        "The borrowing process is smooth and the system keeps me updated on return dates. Highly efficient!",
    },
    {
      _id: 4,
      readerImg:
        "https://i.ibb.co.com/HpfrPZ5r/Gemini-Generated-Image-dre35wdre35wdre3.png",
      readerName: "Md. Mubtasim Fuad",
      readerEmail: "fuad@gmail.com",
      rating: 3,
      description:
        "Overall a good system, but I wish there were more features for tracking reading history and recommendations.",
    },
    {
      _id: 5,
      readerImg: "https://i.ibb.co.com/4bjD5Wj/Anis.png",
      readerName: "Anisur Rahman",
      readerEmail: "anisur@gmail.com",
      rating: 5,
      description:
        "Fantastic library management system! It makes borrowing, returning, and searching for books so simple and fast.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      <div className="text-center flex flex-col gap-4 mb-4 lg:mb-10">
        <h1 className="text-[38px] leading-12 lg:text-[40px] font-extrabold">
          What Readers Are Saying
        </h1>
        <p className="text-gray-700 max-w-[600px] mx-auto">
          Users appreciate seeing the platform’s growth and giving insight into
          engagement and community trends.
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        navigation
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={feedback._id}>
            <div
              className={`transition-all duration-300 ease-in-out 
                p-6 rounded-lg shadow-lg text-center 
                bg-blue-200
                ${index === activeIndex ? "" : "blur-sm opacity-50 scale-90"}`}
            >
              <img
                src={feedback.readerImg}
                alt={feedback.readerName}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-500"
              />

              <Rating
                value={feedback.rating}
                readOnly
                style={{ maxWidth: 150, margin: "0 auto" }}
              />

              <p className="text-gray-800 mt-4 text-lg italic">
                "{feedback.description}"
              </p>

              <p className="text-sm text-gray-700 mt-2">
                — {feedback.readerName} <br />
                <span className="text-gray-500">{feedback.readerEmail}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
