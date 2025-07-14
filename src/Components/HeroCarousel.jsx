// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from "react";
import "./HeroCarousel.css";

// Add your local images or use online ones
import Image1 from "../assets/images/img1.jpg";
import Image2 from "../assets/images/img2.jpg";
import Image3 from "../assets/images/img3.jpg";

const images = [Image1, Image2, Image3];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
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
          />
          <button>Search</button>
        </div>

        <div className="arrow left" onClick={goToPrev}>
          ❮
        </div>
        <div className="arrow right" onClick={goToNext}>
          ❯
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
