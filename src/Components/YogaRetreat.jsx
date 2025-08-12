import React from "react";
import { useEffect } from "react";
import "./YogaRetreat.css";
import image1 from '../Assets/retreat1 (1).jpg'
import image2 from '../Assets/retreat1 (2).jpg';
import image3 from '../Assets/retreat1 (3).jpg';
import image4 from '../Assets/retreat1 (4).jpg';
import image5 from '../Assets/retreat1 (5).jpg';
import image6 from '../Assets/retreat1 (6).jpg';
import image7 from '../Assets/retreat1 (7).jpg';
import image8 from '../Assets/retreat1 (8).jpg';
import image9 from '../Assets/retreat1 (9).jpg';
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const yogaImages = [
  { src: image1, title: "Morning Flow" },
  { src: image2, title: "Peaceful Meditation" },
  { src: image3, title: "Nature Balance" },
  { src: image4, title: "Sunset Yoga" },
  { src: image5, title: "Retreat Vibes" },
  { src: image6, title: "Deep Stretch" },
  { src: image7, title: "Deep Stretch" },
  { src: image8, title: "Deep Stretch" },
  { src: image9, title: "Deep Stretch" },
];

const YogaRetreat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
   
    <div className="yoga-container">
      
      <div className="yoga-hero">
        <h1>🌿 Yoga Retreat </h1>
        
      </div>

      {/* Image Gallery */}
      <div className="yoga-gallery">
        {yogaImages.map((item, index) => (
          <div key={index} className="yoga-card">
            <img src={item.src} alt={item.title} />
            
          </div>
        ))}
      </div>

      
     
    </div>
     <Footer />
     </div>
  );
};

export default YogaRetreat;
