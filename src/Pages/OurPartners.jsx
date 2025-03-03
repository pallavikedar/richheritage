import React, { useEffect, useRef } from "react";
import "./OurPartners.css";
import partner1 from '../Assets/cummins logo.png'
import partner2 from '../Assets/IDFC logo.jpg'
import partner3 from '../Assets/danfoss logo.png'
import partner4 from '../Assets/powergrid logo.jpg'
import partner5 from '../Assets/tata logo.png'
import partner6 from '../Assets/accuramech logo.jpg'
import partner7 from '../Assets/premium logo.jpg'
import partner8 from '../Assets/stratacebt logo.jpg'
const partners = [
  { id: 1, name: "Company 1", logo: partner1 },
  { id: 2, name: "Company 2", logo: partner2 },
  { id: 3, name: "Company 3", logo: partner3 },
  { id: 4, name: "Company 4", logo: partner4 },
  { id: 5, name: "Company 5", logo: partner5},
  { id: 6, name: "Company 6", logo: partner6},
  { id: 7, name: "Company 7", logo: partner7},
  { id: 8, name: "Company 8", logo: partner8},
];

const OurPartners = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (slider) {
        scrollAmount += 1;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0; // Reset scroll to loop seamlessly
        }
        slider.scrollLeft = scrollAmount;
      }
    }, 20); // Adjust speed by changing the interval duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="partners-container">
      <h2>Our Clients  </h2>
      <div className="sliderpart" ref={sliderRef}>
        <div className="slider-track">
          {partners.concat(partners).map((partner, index) => (
            <div className="slider-item" key={`${partner.id}-${index}`}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
