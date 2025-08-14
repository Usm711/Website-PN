import React from 'react';
import '../Css/Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">LET'S TALK OUR TEAM WELL HELP YOU</p>
        
        <div className="contact-content">
          {/* Left Column - Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Phone" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="4"></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Now</button>
            </form>
          </div>
          
          {/* Right Column - Info */}
          <div className="contact-info-wrapper">
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h4>Call Anytime</h4>
                <p>+ 52 345-622478</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h4>Send Email</h4>
                <p>phone@virtual@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h4>Visit Us</h4>
                <p>New Media Chews Web</p>
                <p>Newsletter chat website in</p>
                <p>how Facebook (PC) photos rr</p>
                <p>Post Aboutitized, Position</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;