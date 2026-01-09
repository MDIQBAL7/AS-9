import React, { use, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeroSlider from "./HeroSlider";
import { useLoaderData } from "react-router";
import SingleCard from "./SingleCard";
import EducationalValue from "./EducationalValue";
import WhyChooseUs from "./WhyChooseUs ";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Context/AuthContext";
const Home = () => {
  const data = useLoaderData();
  console.log("this s data of loader", data);

    useEffect(() => {
    document.title = "Home | ToyTopia";
  }, []);
  return (
    <>
    
      <HeroSlider></HeroSlider>
   
      <SingleCard></SingleCard>

       <EducationalValue></EducationalValue>;
      <WhyChooseUs></WhyChooseUs>
    </>
  );
};

export default Home;
