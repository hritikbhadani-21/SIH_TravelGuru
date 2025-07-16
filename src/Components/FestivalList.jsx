// src/components/FestivalList.jsx
import React from "react";
import FestivalCard from "../Components/cards/FestivalCard";

const festivals = [
  {
    image: "/images/festivals/durga.svg",
    title: "Durga Puja (West Bengal)",
    description:
      "Durga Puja honors Goddess Durga’s triumph over Mahishasura, symbolizing the victory of light over darkness. This vibrant festival showcases artistry with elaborate pandals reflecting mythic and contemporary themes."
  },
  {
    image: "/images/festivals/durga.svg",
    title: "Diwali (All India)",
    description:
      "Diwali, the festival of lights, symbolizes the victory of light over darkness and good over evil. Homes are decorated with diyas, candles, and rangoli as families celebrate with sweets and fireworks."
  },
  {
    image: "/images/festivals/chhat.svg",
    title: "Chhat (North India)",
    description:
      "Chhat, the festival of colors, brings people together in a riot of colors, music, and joy. Friends and family smear colors, share sweets, and celebrate the arrival of spring with dance and songs."
  }
];

const FestivalList = () => {
  return (
    <div>
      {festivals.map((festival, index) => (
        <FestivalCard
          key={index}
          image={festival.image}
          title={festival.title}
          description={festival.description}
        />
      ))}
    </div>
  );
};

export default FestivalList;
