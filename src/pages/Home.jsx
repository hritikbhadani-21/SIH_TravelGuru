// src/pages/Home.jsx
import React from "react";
import HeroCarousel from "../Components/HeroCarousel";
import Festival from "../Components/cards/FestivalCard"
import DestinationCard from "../Components/cards/DestinationCard"

const Home = () => {
  return (
   <>
    <HeroCarousel/>
    
    <DestinationCard/>
    <Festival/>
   </>
  );
};

export default Home;
