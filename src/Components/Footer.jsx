import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import logo from "../Assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer-container">
    
      <div className="footer-content">
      <div className="logo-container2">
        <img src={logo} alt="logo" className="logo2" />
      </div>
        {/* Company Info Section */}
        <div className="footer-section">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li><a href="#about" className="footer-link">About Us</a></li>
            <li><a href="#service" className="footer-link">Services</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
       
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/richheritageyoga?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <FaFacebook />
            </a>
          
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <FaInstagram />
            </a>
          
          </div>
        </div>

        {/* Address Section */}
        <div className="footer-section">
          <h3 className="footer-title">Our Locations</h3>
          <ul className="footer-address">
          <li >
            4th Floor, Datta Laxmi Arcade, Next to Navale Hospital, Wagholi, Pune-412207
          </li>
          <li >
          Next to Neo city Society, Bakori road Wagholi 
        </li>
        <li >
        2nd floor V axis complex , Ivy estate road, Wagholi
      </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">© 2024 Rich Heritage Yoga Centre. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
