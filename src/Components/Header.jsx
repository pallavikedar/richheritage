import React,{useState}from "react";
import { FaHome, FaInfoCircle, FaServicestack, FaPhoneAlt } from "react-icons/fa";
import logo from "../Assets/logo.jpg";
import "./Header.css"; // Import the CSS file for styling
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation
import { IoMdClose } from "react-icons/io";
function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="menu">
        <ul>
        <Link to="/">
          <li>
            <FaHome className="menu-icon" />
            Home
          </li>
          </Link>
          <a href="#about">
          <li>
            <FaInfoCircle className="menu-icon" />
            About Us
          </li>
          </a>
          <a href="#service">
          <li>
            <FaServicestack className="menu-icon" />
            Service
          </li>
          </a>
          <a href="#contact">
          <li>
            <FaPhoneAlt className="menu-icon" />
            Contact Us
          </li>
          </a>
        </ul>
      </div>
      <div className="sidebar">
      <GiHamburgerMenu className="side" onClick={toggleSidebar}/>
      </div>
    </div>
       {/* Sidebar */}
       {isSidebarOpen && (
        <div className="sidebar-wrapper">
          {/* Sidebar Overlay */}
          <div className="sidebar-overlay" onClick={closeSidebar}></div>

          {/* Sidebar Content */}
          <div className="sidebar-container">
            <div className="sidebar-header">
              <h2>Menu</h2>
              <IoMdClose className="close-icon" onClick={closeSidebar} />
            </div>
            <ul>
              <li>
                <a href="#home" onClick={closeSidebar}>
                  <FaHome className="menu-icon" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeSidebar}>
                  <FaInfoCircle className="menu-icon" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#service" onClick={closeSidebar}>
                  <FaServicestack className="menu-icon" />
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeSidebar}>
                  <FaPhoneAlt className="menu-icon" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
