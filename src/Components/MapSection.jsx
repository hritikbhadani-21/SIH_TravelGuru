// src/components/MapSection.jsx
import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section id="map-section" className="map-section">
      <h2>Bharat Unreveal</h2>
      <div className="map-image-container">
        <img src="/hero/Map.svg" alt="Bharat Map" />
      </div>
    </section>
  );
};

export default MapSection;
