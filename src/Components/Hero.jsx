// src/components/Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>
          Explore <span>Hidden India</span> <br />
          Rich in Culture and <br />
          Tradition
        </h1>
        <p className="hero-description">
          Tired of searching for India's hidden gems? <br />
          Let us simplify your search and help you discover <br />
          cultural wonders effortlessly.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Sign up</button>
          <button className="btn-secondary">Login</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-grid">
          <img
            src="Travguru\public\images\down left.svg"
            alt="Taj Mahal 1"
          />
          <img
            src="Travguru\public\images\right.svg"
            alt="Taj Mahal 2"
          />
          <img
            src="Travguru\public\images\up left.svg"
            alt="Taj Mahal 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
