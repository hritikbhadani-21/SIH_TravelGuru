// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

// Logo & Profile icons
import LogoIcon from "../assets/icons/logo.svg";
import ProfileIcon from "../assets/icons/profile.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={LogoIcon} alt="Logo" className="logo" />
        </Link>
        <div className="brand-text">
          {/* Add your brand text if needed */}
        </div>
      </div>

      <div className={`navbar-center ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        <NavLink to="/services" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
      </div>

      <div className="navbar-right">
        <button className="cta">Bharat Unveil</button>
        <div className="profile-circle">
          P
          {/* Or <img src={ProfileIcon} alt="Profile" /> */}
        </div>

        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
