import React from 'react';
import '../Css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info - First Column */}
          <div className="footer-column">
            <div className="footer-logo">
              {/* Replace the path with your actual image path */}
              <img 
                src="/images/footerlogo.png" 
                alt="Pulxet Logo" 
                className="logo-image"
              />
            </div>
            <p className="footer-description">
              Pulxet is a forward-thinking IT company delivering tailored solutions in software development, 
              networking, digital marketing, and cloud services. We help businesses grow through innovation, 
              efficiency, and trusted technology partnerships.
            </p>
          </div>

          {/* Services - Second Column */}
          <div className="footer-column">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#">Web Design/Development</a></li>
              <li><a href="#">App Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">HubSpot Integration</a></li>
              <li><a href="#">Email Marketing</a></li>
              <li><a href="#">Website Migration</a></li>
            </ul>
          </div>

          {/* Career - Third Column */}
          <div className="footer-column">
            <h3 className="footer-title">Career</h3>
            <div className="career-items">
              <div className="career-item">
                <div className="career-bullet">•</div>
                <div className="career-content">
                  <h4>ReactJS Dev.</h4>
                  <span>5 Years of Exp.</span>
                </div>
              </div>
              <div className="career-item">
                <div className="career-bullet">•</div>
                <div className="career-content">
                  <h4>Wordpress Dev.</h4>
                  <span>5 Years of Exp.</span>
                </div>
              </div>
              <div className="career-item">
                <div className="career-bullet">•</div>
                <div className="career-content">
                  <h4>Python Developer</h4>
                  <span>5 Years of Exp.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subscribe - Fourth Column */}
          <div className="footer-column">
            <h3 className="footer-title">Subscribe Us</h3>
            <p className="subscribe-description">
              It is a long established fact that a reader will be distracted by the readable
            </p>
            <div className="subscribe-form">
              <input 
                type="email" 
                placeholder="Email" 
                className="subscribe-input"
              />
              <button className="subscribe-btn">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Pulxet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;