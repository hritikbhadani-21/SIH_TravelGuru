// src/components/FoodList.jsx
import React from "react";
import FoodCard from "../Components/cards/FestivalCard";

const foods = [
  {
    image: "/images/food/rashgulla.svg",
    name: "Rasgulla",
    description: "A soft, spongy sweet made from chhena, soaked in sugar syrup. Popular during Durga Puja."
  },
  {
    image: "/images/food/litti.svg",
    name: "Litti",
    description: "Round salty made from flour, ghee, and salt, often served during winters."
  },
  {
    image: "/images/food/gajak.svg",
    name: "Gajak",
    description: "A crispy pastry stuffed with sweet khoya, dry fruits. A Holi favorite!"
  }
];

const FoodList = () => {
  return (
    <div>
      {foods.map((food, index) => (
        <FoodCard
          key={index}
          image={food.image}
          name={food.name}
          description={food.description}
        />
      ))}
    </div>
  );
};

export default FoodList;
