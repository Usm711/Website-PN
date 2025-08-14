import React from 'react';
import '../Css/Contact.css';
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        
        {/* Left Side: Contact Form */}
        <div className="contact-form-wrapper">
          <p className="get-in-touch">\\ Get In Touch \\</p>
          <h2>LET'S TALK OUR TEAM WILL HELP YOU</h2>
          
          <form className="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" placeholder="Phone" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
            </div>
            <button type="submit" className="send-button">
              {/* Send Now <FaArrowRight className="arrow-icon" /> */}
            </button>
          </form>
        </div>
        
        {/* Right Side: Contact Info */}
        <div className="contact-info-wrapper">
          <div className="info-item">
            <div className="info-icon-bg">
              {/* <FaPhoneAlt /> */}
            </div>
            <div className="info-text">
              <h4>Call Anytime</h4>
              <p>+92 348-1232271</p>
              <p>+92 327-8593478</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon-bg">
              {/* <FaEnvelope /> */}
            </div>
            <div className="info-text">
              <h4>Send Email</h4>
              <p>info@youremail.com</p>
              <p>pulseitpvtltd@gmail.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon-bg">
              {/* <FaMapMarkerAlt /> */}
            </div>
            <div className="info-text">
              <h4>Visit Us</h4>
              <p>Near Missile Chowk Main Mansehra road Mandian 1st floor, Pulseit (PVT) Limited IT Park Abbottabad, Pakistan</p>
            </div>
          </div>
          
          <div className="info-follow">
            <h4>Follow us</h4>
            <div className="social-icons">
              {/* <a href="#" className="social-icon"><FaLinkedinIn /></a> */}
              {/* <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a> */}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;