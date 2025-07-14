// src/components/DestinationCard.jsx
import React from "react";
import "./DestinationCard.css";

const DestinationCard = () => {
  return (
    <div className="destination-card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Victoria_Memorial_Kolkata_Panorama.jpg"
        alt="Victoria Memorial"
        className="destination-image"
      />

      <h2 className="destination-title">Victoria Memorial</h2>
      <p className="destination-description">
        Tired of searching for India's hidden gems? Let us simplify your search
      </p>

      <div className="destination-buttons">
        <button className="btn-primary">Explore</button>
        <button className="btn-secondary">Wishlist</button>
      </div>
    </div>
  );
};

export default DestinationCard;
