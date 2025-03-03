import React, { useState, useEffect } from "react";
import Header from "../Components/Header";

import { IoChevronForward } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import "./Home.css";
import slide1 from "../Assets/slide1.jpg";
import slide2 from "../Assets/slide2.jpg";
import slide3 from "../Assets/slide3.jpg";
// import slide4 from "../Assets/slide4.jpg";

import About from "./About";
import Yogabenefit from "./Yogabenefit";
import ServicesPage from "./Services";
import MedicalYogaTherapy from "./MedicalYogaTherapy";
import ContactUs from "./Contact";
import Footer from "../Components/Footer";
import ContactIcons from "../Components/ContactIcon";
import Gallery from "./Gallary";
import OurPartners from "./OurPartners";
import Csr from "./Csr";

function Home() {
  const slides = [
    {
      image: slide1,
     
    },
    {
      image: slide2,
      
    },
    {
      image: slide3,
      
    }
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Automatically transition slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
    <div>
      <Header />
      <ContactIcons/>
      <div className="slider">
        <IoIosArrowBack className="arrow left" onClick={prevSlide} />
        <div className="slide" key={currentIndex}>
          <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
          <div className="content">
          
          
            <h2>Rich Heritage Yoga</h2>
            <h2>&</h2>
            <h2>Therapy Center</h2>
            
            <a href="#contact"> <button>Contact Us</button></a>
            
          </div>
        </div>
        <IoChevronForward  className="arrow right" onClick={nextSlide} />
        
      </div>
      <About/>
      <ServicesPage/>
      <Csr/>
      <MedicalYogaTherapy/>
      <Yogabenefit/>
      <Gallery/>
      <OurPartners/>
      <ContactUs/>
      <Footer/>
    </div>
    </>
  );
}

export default Home;
