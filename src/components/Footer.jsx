import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaPinterest } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-left'>
        <p className='footer-desc'>Retrouvez-nous sur</p>
        <div className='social-container'>
          <div className='social-icon'>
            <FaFacebook className='icon' />
          </div>
          <div className='social-icon'>
            <FaInstagram className='icon' />
          </div>
          <div className='social-icon'>
            <FaPinterest className='icon' />
          </div>
        </div>
      </div>

      {/* Section Newsletter avec le style demandé */}
      <div className='footer-newsletter'>
        <h3 className='newsletter-title'>S'INSCRIRE À NOTRE NEWSLETTER !</h3>
        <div className='newsletter-form'>
          <input 
            type="email" 
            placeholder="Inscrivez-vous à notre infolettre" 
            className="newsletter-input"
          />
          <IoMail className="newsletter-icon" />
        </div>
        <div className="newsletter-underline"></div>
      </div>

      <div className='footer-right'>
        <h3 className='footer-title'>Contact</h3>
        <div className='contact-item'>
          <FaLocationDot className='contact-icon' /> 123 Street, City
        </div>
        <div className='contact-item'>
          <FaPhoneAlt className='contact-icon' /> 216 28688762
        </div>
        <div className='contact-item'>
          <IoMail className='contact-icon' /> Dalel.sd97@gmail.com
        </div>
      </div>

      <div className='footer-bottom'>© 2025 LUNALYS Beauté</div>
    </div>
  );
};

export default Footer;
