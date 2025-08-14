import React from "react";
import "../Css/OurExpertise.css";

const expertiseData = [
  {
    icon: "fas fa-server",
    title: "IT Infrastructure & Support",
    description: "Reliable IT infrastructure and 24/7 support to keep your business running smoothly."
  },
  {
    icon: "fas fa-network-wired",
    title: "Networking Designing",
    description: "We design highly scalable and secure network infrastructure customized to align perfectly with your unique business objectives."
  },
  {
    icon: "fas fa-shield-alt",
    title: "Cyber Security",
    description: "Safeguard your digital environment with advanced, intelligent security driven by proactive strategies and real-time cyber protection."
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud Computing",
    description: "Empowering your business with scalable, on-demand cloud computing solutions for enhanced performance and efficiency."
  },
  {
    icon: "fas fa-code-branch",
    title: "DevOps Solution",
    description: "Streamlining development and operations with agile, automated DevOps solutions for faster and more reliable delivery."
  },
  {
    icon: "fas fa-globe",
    title: "Global Remote Services",
    description: "Delivering seamless global remote IT services to support your business anytime, anywhere."
  }
];

const OurExpertise = () => {
  return (
    <section className="expertise-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <p className="section-subtitle">Services</p>
          <h2 className="section-title">OUR EXPERTISE</h2>
        </div>

        {/* Cards */}
        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <div key={index} className="expertise-card">
              <div className="icon-wrapper">
                <i className={`${item.icon} card-icon`}></i>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <button className="card-button">
                Learn More <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="button-container">
          <button className="view-more-button">
            View More <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
