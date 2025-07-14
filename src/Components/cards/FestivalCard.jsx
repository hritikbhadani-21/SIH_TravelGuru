// src/components/FestivalCard.jsx
import React from "react";
import "./FestivalCard.css";

const FestivalCard = ({ image, title, description }) => {
  return (
    <div className="festival-card">
      <div className="festival-image">
        <img src={image} alt={title} />
      </div>

      <div className="festival-content">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="festival-buttons">
          <button className="btn-primary">Discover</button>
          <button className="btn-secondary">
            <span className="play-icon">▶</span> Know Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default FestivalCard;
