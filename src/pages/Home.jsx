// src/pages/Home.jsx
import React from "react";
import HeroCarousel from "../Components/HeroCarousel";
import Festival from "../Components/cards/FestivalCard"
import DestinationCard from "../Components/cards/DestinationCard"
import Main from "./MainPage";
import Hotels from "../Components/section/Hotels";
import Hero from "../Components/Hero";
import Content from "../Components/section/Content";
import FestivalList from "../Components/FestivalList";
import FoodList from "../Components/FoodList";
import Landing from "./Landing";

const Home = () => {
  return (
   <>
    
   <HeroCarousel/>
   <Content/>
    <h1>Places In News</h1>
   <Content/>
   <h1>UpComing Events</h1>
   <FestivalList/>
   </>
  );
};

export default Home;
