// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from "react";
import "./HeroCarousel.css";
import { useNavigate } from "react-router-dom";

// Images from public folder:
const images = [
  "/images/monuments/agrafort.svg",
  "/images/monuments/tajmahalhero.svg",
  "/images/monuments/victoria.svg",
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleSearch = () => {
    // Navigate with query string
    navigate(`/main?query=${encodeURIComponent(searchQuery)}`);

  };

  return (
    <div
      className="hero-carousel"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-overlay">
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter your Destination"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        

        <div className="dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={idx === currentIndex ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
