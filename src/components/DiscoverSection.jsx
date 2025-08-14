import React from "react";
import "../Css/DiscoverSection.css"; // Importing the CSS for styling

const DiscoverSection = () => {
  return (
    <section className="discover-section">
      <div className="discover-container">
        {/* Left Background */}
        <div className="discover-left">
        </div>

        {/* Center Image Placeholder */}
        <div className="discover-center-image">
          <div className="image-box">
            <img src="/images/b8a063ebe0d7b3f666b070c02df3ff79cc499b9c.jpg" alt="" />
          </div>
        </div>

        {/* Right Content */}
        <div className="discover-right">
          <div className="content-wrapper">
            {/* Header */}
            <div className="section-header">
              <div className="tagline">
                <div className="tagline-line"></div>
                <span className="tagline-text">What we do</span>
              </div>
              <h2 className="section-title">
                DISCOVER HOW WE HELP YOU{" "}
                <span className="highlight">GROW THROUGH INNOVATIVE</span>{" "}
                IT SOLUTION
              </h2>
              <p className="section-description">
                At YourCompany, we deliver cutting-edge IT solutions tailored to your business 
                goals. From web and mobile app development to UI/UX design, cloud 
                integration, and digital transformation — we handle it all. Our focus is on 
                innovation, quality, and scalable tech.
              </p>
            </div>

            {/* Cards */}
            <div className="card-grid">
              <div className="custom-card">
                <div className="icon-box">
                  <i className="fas fa-lightbulb text-primary"></i>
                </div>
                <div>
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-text">
                    To empower businesses with smart, secure, 
                    and scalable digital solutions that drive 
                    growth, efficiency, and long-term success.
                  </p>
                </div>
              </div>

              <div className="custom-card">
                <div className="icon-box">
                  <i className="fas fa-crown text-primary"></i>
                </div>
                <div>
                  <h3 className="card-title">Our Vision</h3>
                  <p className="card-text">
                    To become a global leader in IT services by 
                    consistently delivering innovative technology 
                    and exceptional value to our clients.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="custom-button">
                View More
                <i className="fas fa-arrow-right button-icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
