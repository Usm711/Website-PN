import React from "react";
import "../Css/AboutUs.css"; // Changed filename to reflect isolated component

function AboutUs() {
  return (
    <header className="aboutus-header">
      <div className="aboutus-header-right">
        <img
          src="/images/51c4e18b227ca9a8cfd63e4c13f5f1b3cc266761.jpg"
          alt="PulxeNet Team Meeting"
        />
      </div>
      <div className="aboutus-header-left">
        <div className="aboutus-content">
          <p className="aboutus-subtitle">\About us\</p>

          <div className="aboutus-section-divider">
            <div className="aboutus-divider-line"></div>
            <h2>EMPOWERING INNOVATION THROUGH IT</h2>
            <div className="aboutus-divider-line"></div>
          </div>

          <p className="aboutus-description">
            PulxeNet is a forward-thinking IT company delivering smart, scalable digital solutions.
            We specialize in development, design, and tech support to help businesses grow in a digital-first world.
            With innovation at our core, we turn your ideas into reliable tech products.
          </p>

          <div className="aboutus-contact-card">
            <div className="aboutus-contact-icon">
              <i className="fas fa-headset"></i>
            </div>
            <div className="aboutus-contact-info">
              <h3>Get Instant Professional Advice</h3>
              <p>
                Ready to Help: <span className="aboutus-highlight">+346-922271</span> / <span className="aboutus-highlight">+327-8593478</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AboutUs;
