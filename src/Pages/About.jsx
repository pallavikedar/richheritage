import React,{useEffect} from 'react'

import './About.css';
import { FaEye, FaBullseye } from "react-icons/fa";
import img from '../Assets/abimg.jpg';
import founder from '../Assets/founder1.jpeg';
import team from '../Assets/team.png';
import AOS from 'aos';
import 'aos/dist/aos.css';




function About() {
   useEffect(() => {
        AOS.init();
      }, [])
  const data = {
  founder: [{
    name: "Abhijeet B Gaikwad",
    image: founder,
    role: "Founder",
    description: " Yogacharya In yoga,YCB LEVEL 6 (YM),RYT 200 (YOGA ALLIANCE INTERNATIONAL), Medical Yoga therapist, Music therapist, Dietitian, B.A YOGAVISHARAD, CCY (KAIVALYADHAM), Diploma in Pharmacy"
  },
   {
    name: "Soniya Raj",
    image: team,
    role: "Lead Trainer",
    description: " M.A in Yoga (SPPU),YCB LEVEL 3, RYT 200 (YOGA ALLIANCE INTERNATIONAL), Medical Yoga therapist, Pregnancy Yoga Teacher,IATA Graduate",
  },]
  
  
};
  return (
    <div className='about' id='about'>
      <div className='aboutHead'>  <h1 className='headab'>About Us</h1></div>
      <div className='abcontent' data-aos="zoom-in-up" data-aos-duration="2000">
      <ul className='rounded-list'>
      <li>Rich Heritage Yoga established in 2015.</li>
      <li>International Certified & Ministry of  Ayush
      Yoga Certified Teachers.</li>
      <li>Serving health since then to may people and organization such as Schools/ Corporates 
      sectors/Fitness Centers/ Institution and 
      regular offline and Online Batches.</li>
     <li> Workshops and Yoga Retreat. </li>
      <li>Thorough knowledge and Scientific 
      explanation for all Asanas and Kriyas. Personalized plan for yoga therapy.</li>
      <li>Over 10 years of experience and expertise in the field of yoga.</li>
      <li>Friendly and conducive environment for yoga.</li>
      <li>Innovative ideas in making yoga more fun.</li>
      <li>Result oriented programs.</li>
      </ul>
      <div className='abimg'>
      <img src={img} alt='img'/>
      
      </div>
     
      </div>
       <div className="vision-mission-container">
      <div className="card vision"  data-aos="zoom-in-up" data-aos-duration="1200"
     
     >
        <div className="icons">
          <FaEye size={40} />
        </div>
        <h2 className="heading">Vision</h2>
        <p className="description">
          We aim to become World Class Yoga 
Institution, providing Best Health 
services and Trainings in Preventive 
Healthcare sector.
        </p>
      </div>
      <div className="card mission"  data-aos="zoom-in-up" data-aos-duration="1200">
        <div className="icons">
          <FaBullseye size={40} />
        </div>
        <h2 className="heading">Mission</h2>
        <p className="description">
          We pledge to Provide Quality services 
related to Yoga and allied therapies to 
our clients, as per to International
standards.
        </p>
      </div>
    </div>
    <div className="founder-team-container">
      {/* Founder Section */}
      {data.founder.map((member, index) => (
      <div className="founder-section" key={index} data-aos="fade-up"
      data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
        <div className="founder-image">
          <img src={member.image} alt={member.name} />
        </div>
        <div className="founder-info">
          <h2 className="founder-name">{member.name}</h2>
          <p className="founder-role">{member.role}</p>
          <p className="founder-description">{member.description}</p>
        </div>
      </div>
    ))}

      {/* Team Section */}
      
    </div>
    </div>
  )
}

export default About
