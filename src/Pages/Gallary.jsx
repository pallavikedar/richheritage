import React from "react";
import "./Gallary.css";
import image1 from '../Assets/gallary1.jpeg';
import image2 from '../Assets/yoga retreat.jpeg';
import image3 from '../Assets/gallary2.jpeg';
import image4 from '../Assets/yoga2.jpeg';
import image5 from '../Assets/gallary4.jpeg';
import image6 from '../Assets/gallary3.jpeg';
import image7 from '../Assets/g6.jpeg';
import image8 from '../Assets/g7.jpeg';
import image9 from '../Assets/g8.jpeg';
import image10 from '../Assets/g10.jpeg';

import image12 from '../Assets/g12.jpeg';
import image13 from '../Assets/g13.jpeg';



const images = [
  { id: 1, src: image1, alt: "Image 1" },
  { id: 2, src: image2, alt: "Image 2" },
  { id: 3, src:image3, alt: "Image 3" },
  { id: 4, src:image4, alt: "Image 4" },
  { id: 5, src:image5, alt: "Image 5" },
  { id: 6, src:image6, alt: "Image 6" },
  { id: 7, src:image7, alt: "Image 7" },
  { id: 8, src:image8, alt: "Image 8" },
  { id: 9, src:image9, alt: "Image 9" },
  { id: 10, src:image10, alt: "Image 10" },

  { id: 12, src:image12, alt: "Image 12" },
  { id: 13, src:image13, alt: "Image 13" },

  
];

const Gallery = () => {
  return (
    <>
    <div>
    <h1 className="gal-header">Gallary</h1>
    <div className="unique-gallery-container">

      {images.map((image) => (
        <div key={image.id} className="unique-gallery-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
    
    </div>
   
 
    </>
  );
};

export default Gallery;
