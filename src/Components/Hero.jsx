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
        <div class="image-grid">
  <img src="/hero/up left.svg" alt="Up Left" class="upleft" />
  <img src="/hero/down left.svg" alt="Down Left" class="downleft" />
  <img src="/hero/right.svg" alt="Right" class="right" />
</div>

      </div>
    </div>
  );
};

export default Hero;
