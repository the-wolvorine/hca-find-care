import React from 'react';
import Logo from "./HCA_Footer_Logo.png";
import "./footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={Logo} alt="HCA+ Houston Healthcare" />
      </div>
      <div className="contact">
        <p>3737 Buffalo Speedway</p>
        <p>Suite 1400</p>
        <p>Houston, TX 77098</p>
        <a href="#">Phone Directory</a>
        <a href="#">Maps & Directions</a>
        <a href="#">Media Center</a>
        <a href="#">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
