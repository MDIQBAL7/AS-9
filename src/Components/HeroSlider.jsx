import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const HeroSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[400px]"
      >
        {[
          {
            title: "Fun Toys for Happy Kids",
            img: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8",
          },
          {
            title: "Educational Toys Collection",
            img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b",
          },
          {
            title: "Safe & Quality Toys",
            img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
          },
        ].map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="bg-black/50 text-white px-6 py-4 rounded-xl text-3xl font-bold">
                {slide.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
