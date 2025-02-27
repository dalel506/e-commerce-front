import React, { useState } from "react";
import "./Contact.css"; 
import { FaPhoneAlt, FaClock, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message envoyé avec succès !");
  };

  return (
    <div className="contact-container">
   <div className="contact-text">Contactez-nous</div>

<div className="contact-container">
      {/* Sections Contact */}
      <div className="contact-info" >
        <div className="info-box ">
          <FaLocationArrow className="icon" />
          <h2>Localisation</h2>
          <p>8814 Bayberry Ave.</p>
          <p>Jonesborough, TN 37659</p>
        </div>

        <div className="info-box">
          <FaPhoneAlt className="icon" />
          <h2>Support</h2>
          <p>Telephone: +(216) 28 688 762</p>
        </div>

        <div className="info-box">
          <FaClock className="icon" />
          <h2>Horaire</h2>
          <p>Lundi - Vendredi: 09:00 To 18:00</p>
          <p>Fermer en Samedi & Dimanche</p>
        </div>
      </div>

      {/* Formulaire + Carte */}
      <div className="contact-content">
    

        {/* Formulaire de Contact */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        </div>
      </div>
   </div>
  
  );
};

export default Contact;
