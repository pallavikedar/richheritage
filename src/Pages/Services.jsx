import React, { useState } from "react";
import {
  FaChild,
  FaGlobe,
  FaHeartbeat,
  FaMedkit,
  FaBuilding,
  FaBook,
  FaMountain,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";
import yogaclass from "../Assets/yoga1.jpeg";
import image14 from '../Assets/yogacerification.jpeg';
import pregenancy from "../Assets/pregenancyyoga.jpg";
import online from "../Assets/onlineyoga.jpg";
import medical from "../Assets/medical1.jpeg";
import corporate from "../Assets/corporateimg.jpeg";
import retreat from "../Assets/retreat.jpeg";
import workshop from "../Assets/yogaworkshop.jpeg";
import image11 from '../Assets/g11.jpeg';
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServicesPage.css";

const services = [
  {
    icon: <FaChild />,
    title: "Yoga Classes",
    description: "Join our regular yoga classes for a healthy lifestyle.",
    image: yogaclass,
  },
  {
    icon: <FaGlobe />,
    title: "Online Yoga",
    description: "Practice yoga from the comfort of your home.",
    image: online,
  },
  {
    icon: <FaHeartbeat />,
    title: "Pregnancy Yoga",
    description: "Specialized yoga sessions for expecting mothers.",
    image: pregenancy,
  },
  {
    icon: <FaMedkit />,
    title: "Medical Yoga",
    description: "Therapeutic yoga for medical conditions.",
    image: medical,
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Yoga",
    description: "Yoga sessions designed for workplace wellness.",
    image: corporate,
  },
  {
    icon: <FaBook />,
    title: "Yoga Courses",
    description: "Comprehensive yoga courses for all levels.",
    image: image14,
    courses: [
      {
        title: "Kids Yoga Teacher Course",
        subCourses: [
          "Anatomy of children",
          "Age-appropriate yoga | Pranayama for children",
          "Virtuous thinking with Yoga | Yoga drawing / Painting",
          "Art of Storytelling",
        ],
      },
      {
        title: "Yoga Teacher Course",
        subCourses: [
          "Digital notes",
          "Deep theory insights",
          "Human Anatomy",
          "Thorough Practicals",
          "Yoga Philosophy",
          "Live class handling",
          "Sankhya Darshan",
          "Video Recordings",
          "Teaching Methods",
          "Skill development",
        ],
      },
      {
        title: "Medical Yoga Therapy Course",
        subCourses: [
          "Thorough Human Anatomy",
          "Practicals",
          "Intense practice",
          "Notes",
          "Videos and University certificate",
        ],
      },
      {
        title: "Pregnancy Yoga Teacher Training",
      },
    ],
  },
  {
    icon: <FaMountain />,
    title: "Yoga Retreats",
    description: "Relax and rejuvenate with our yoga retreats.",
    image: retreat,
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Yoga Workshops",
    description: "Interactive workshops to deepen your practice.",
    image: workshop,
  },
  {
    icon: <FaUsers />,
    title: "Mega Events",
    description: "Join our grand yoga events and connect with the community.",
    image: image11
  },
];

const ServicesPage = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
  const closePopup = () => {
    setOpenDropdownIndex(null);
  };

  return (
    <div className="services-container" id="service">
      <h1 className="services-header">Our Services</h1>
      <div className="services-grid" data-aos="zoom-in-up" data-aos-duration="2000">
        {services.map((service, index) => (
          <div key={index} className="services-card" style={{ position: "relative" }}>
            <div className="services-image-wrapper">
              <img src={service.image} alt={service.title} className="services-image" />
            </div>
            <div className="services-content">
              <div className="services-icon">{service.icon}</div>
              <h3 className="services-title">{service.title}</h3>
              <p className="services-description">{service.description}</p>
              {service.courses && (
                <>
                  <button
                    className="view-course-button"
                    onClick={() => toggleDropdown(index)} // Toggle dropdown for clicked service
                  >
                    View Courses
                  </button>
                  <div
                    className={`dropdown-container ${openDropdownIndex === index ? "show" : ""}`}
                  >  
                  <h2 className="popup-header">{service.title}</h2>
                  <button className="close-button" onClick={closePopup}>
                    &times;
                    </button>
                    <ul className="courses-list">
                    
                      {service.courses.map((course, courseIndex) => (
                        <>
                       
                        <li key={courseIndex} className="course-item">
                          <h4 className="course-title">{course.title}</h4>
                          {course.subCourses?.length > 0 && (
                            <ul className="subcourse-list">
                              {course.subCourses.map((subCourse, subIndex) => (
                                <li key={subIndex} className="subcourse-item">
                                  {subCourse}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
