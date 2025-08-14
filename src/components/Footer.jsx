import React from 'react';
import '../Css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <span className="logo-icon">P</span>
              <span className="logo-text">Pulse</span>
            </div>
            <p className="footer-description">
              Pulse is a dynamic leading company 
              advancing based on unique strength 
              and trusted experience. We offer 
              one-circuit services. We help businesses grow 
              through innovative effective, and custom 
              solutions.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-icon"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="footer-social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="footer-social-icon"><i className="fab fa-facebook"></i></a>
              <a href="#" className="footer-social-icon"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#">Web Design Development</a></li>
              <li><a href="#">App Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">HubSpot Integration</a></li>
              <li><a href="#">Email Marketing</a></li>
            </ul>
          </div>

          {/* Career */}
          <div className="footer-column">
            <h3 className="footer-title">Career</h3>
            <div className="career-items">
              <div className="career-item">
                <div className="career-icon"><i className="fas fa-code"></i></div>
                <div className="career-content">
                  <h4>ReactJs Dev.</h4>
                  <span>5+ Years of Exp</span>
                </div>
              </div>
              <div className="career-item">
                <div className="career-icon"><i className="fab fa-wordpress"></i></div>
                <div className="career-content">
                  <h4>Wordpress Dev.</h4>
                  <span>5+ Years of Exp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div className="footer-column">
            <h3 className="footer-title">Subscribe Us</h3>
            <p className="subscribe-description">
              It is a long established 
              fact that a reader will be 
              distracted by the 
              readable content of a page.
            </p>
            <div className="subscribe-form">
              <input 
                type="email" 
                placeholder="Email" 
                className="subscribe-input"
              />
              <button className="subscribe-btn">
                <i className="fas fa-paper-plane"></i> Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Pulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
