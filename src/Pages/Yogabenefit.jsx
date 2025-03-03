import React, { useState, useEffect } from 'react';
import { FaLeaf, FaSmile, FaBrain, FaHeart } from "react-icons/fa";
import { GiMeditation, GiLotusFlower } from "react-icons/gi";
import { MdOutlineSelfImprovement } from "react-icons/md";
import "./YogaRetreat.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
function YogaBenefit() {
  useEffect(() => {
          AOS.init();
        }, [])
  const benefits = [
    { icon: <FaLeaf />, title: "Physical Fitness", desc: "Making you feel physically fit" },
    { icon: <GiMeditation />, title: "Stress Handling", desc: "Handling stress positively" },
    { icon: <FaBrain />, title: "Anxiety Reduction", desc: "Reducing anxiety effectively" },
    { icon: <FaHeart />, title: "Focus Improvement", desc: "Improving mental focus" },
    { icon: <MdOutlineSelfImprovement />, title: "Irritability Reduction", desc: "Reducing irritability" },
    { icon: <GiLotusFlower />, title: "Mental Stability", desc: "Bringing mental stability" },
    { icon: <FaSmile />, title: "Joyful State", desc: "Creating a joyful mental state" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Adjust items per page based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setItemsPerPage(1); // Mobile: 1 item
      } else if (width <= 1024) {
        setItemsPerPage(2); // Tablet: 2 items
      } else {
        setItemsPerPage(3); // Desktop: 3 items
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(benefits.length / itemsPerPage));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(benefits.length / itemsPerPage) - 1 : prevIndex - 1
    );
  };

  const visibleBenefits = benefits.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <>
    <div className="yoga-retreat">
      <h1 className="title1">Benefits Of Yoga</h1>
      <p className="subtitle">Discover the benefits of a balanced mind and body</p>
      <div className="slider-container" data-aos="zoom-in"  data-aos-duration="2000">
        <button className="slider-button" onClick={prevSlide}>
          &#8592;
        </button>
        <div className="slider1">
          {visibleBenefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <div className="icon1">{benefit.icon}</div></div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
        <button className="slider-button" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
    </div>
    </>
  );
}

export default YogaBenefit;
