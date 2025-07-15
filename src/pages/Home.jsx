// src/pages/Home.jsx
import React from "react";
import HeroCarousel from "../Components/HeroCarousel";
import Festival from "../Components/cards/FestivalCard"
import DestinationCard from "../Components/cards/DestinationCard"
import Main from "./MainPage";
import Hotels from "../Components/section/Hotels";

const Home = () => {
  return (
   <>
    
    <Main/>
    <Hotels/>
   </>
  );
};

export default Home;
