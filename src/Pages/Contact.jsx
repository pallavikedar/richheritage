import React, {useEffect} from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import "./Contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
     useEffect(() => {
            AOS.init();
          }, [])
  const phone = "9765533055"; // Replace with actual phone number
  const email = "richheritageyoga@gmail.com"; // Replace with actual email address
  const whatsapp = "https://wa.me/9890268268"; // Replace with WhatsApp number link

  return (
    <div className="contact-us-container" id="contact">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-subtitle">We’d love to hear from you! Reach out through any of the following options.</p>

      {/* Contact Info Box */}
      <div className="contact-info-box" data-aos="fade-up"
      data-aos-duration="500">
        <div className="contact-info-item">
          <FaPhoneAlt className="contact-icon" />
          <div className="contact-details">
            <h3>Phone</h3>
            <p>
              <a href={`tel:${phone}`} className="contact-link">{phone}</a>
            </p>
            <p><IoIosCall /> Call us directly</p>
          </div>
        </div>

        <div className="contact-info-item">
          <FaEnvelope className="contact-icon" />
          <div className="contact-details">
            <h3>Email</h3>
            <p>
              <a href={`mailto:${email}`} className="contact-link">{email}</a>
            </p>
          </div>
        </div>

        <div className="contact-info-item">
          <FaWhatsapp className="contact-icon" />
          <div className="contact-details">
            <h3>WhatsApp</h3>
            <p>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="contact-link">
                Chat with us on WhatsApp
              </a>
            </p>
          </div>
        </div>

        <div className="contact-info-item">
          <FaMapMarkerAlt className="contact-icon" />
          <div className="contact-details">
            <h3>Our Branches</h3>
            <ol>
            <li>4th floor, Datta Laxmi Archade, next to Navale Hospital, Wagholi, Pune-412207</li>
            <li>Next to Neo city Society, Bakori road Wagholi </li>
            <li>2nd floor V axis complex , Ivy estate road, Wagholi</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Embedding Google Map */}
      <div className="address-map-container">
        <iframe
          title="Google Map"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.857844099556!2d73.9786066749644!3d18.580446582524743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c381f3851d6f%3A0xb69da085977b10d!2sRich%20Heritage%20Yoga%20Centre!5e0!3m2!1sen!2sin!4v1735294891790!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
