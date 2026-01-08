import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeroSlider from "./HeroSlider";
import { useLoaderData } from "react-router";
import SingleCard from "./SingleCard";
const Home = () => {
  const data = useLoaderData();

  console.log("this s data of loader", data);

  return (
    <>
      <HeroSlider></HeroSlider>
      <SingleCard></SingleCard>
    </>
  );
};

export default Home;
