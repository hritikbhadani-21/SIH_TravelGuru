// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

// Import your local SVG icons
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import MailIcon from "../assets/icons/mail.svg";
import TwitterIcon from "../assets/icons/twitter.svg";

// Import your logo
import LogoIcon from "../assets/icons/logo.svg"; // update the path to your actual logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={LogoIcon} alt="Exploring India" />
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Terms & policies</h4>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p>(+62) 893912392190</p>
            <p>agecnycr@gmail.com</p>
          </div>

          <div className="footer-column">
            <h4>Location</h4>
            <p>PT Osiris Real Estate Internasional</p>
            <p>Jl. KH. Wahid Hasyim Kel No.10D</p>
            <p>Jakarta, Indonesia</p>
            <p>team@OsirisRealEstate.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-socials">
          <img src={FacebookIcon} alt="Facebook" />
          <img src={InstagramIcon} alt="Instagram" />
          <img src={LinkedInIcon} alt="LinkedIn" />
          <img src={MailIcon} alt="Mail" />
          <img src={TwitterIcon} alt="Twitter" />
        </div>
        <hr />
        <p>Copyright @ 2022 Agency Creative. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
