import React, { useState } from "react";
import "../Css/OurExpertise.css";

const expertiseData = [
  {
    id: 1,
    icon: "fas fa-server",
    title: "IT Infrastructure & Support",
    description: "Reliable IT infrastructure and 24/7 support to keep your business running smoothly.",
    link: "Learn More"
  },
  {
    id: 2,
    icon: "fas fa-network-wired",
    title: "Networking Designing",
    description: "We design highly scalable and secure network infrastructure customized to align perfectly with your unique business objectives.",
    link: "Learn More"
  },
  {
    id: 3,
    icon: "fas fa-shield-alt",
    title: "Cyber Security / DevOps",
    description: "Safeguard your digital environment with advanced, intelligent security driven by proactive strategies and real-time cyber protection.",
    link: "Learn More"
  },
  {
    id: 4,
    icon: "fas fa-cloud",
    title: "Full Stack (App/Mobile Development)",
    description: "Empowering your business with scalable, on-demand cloud computing solutions for enhanced performance and efficiency.",
    link: "Learn More"
  },
  {
    id: 5,
    icon: "fas fa-code-branch",
    title: "Graphic Designing",
    description: "Streamlining development and operations with agile, automated DevOps solutions for faster and more reliable delivery.",
    link: "Learn More"
  },
  {
    id: 6,
    icon: "fas fa-globe",
    title: "Global Remote Services",
    description: "Delivering seamless global remote IT services to support your business anytime, anywhere. CCTV or IP camera survilence",
    link: "Learn More"
  }
];

const OurExpertise = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine which items to display
  const displayedItems = showAll ? expertiseData : expertiseData.slice(0, 3);

  return (
    <section className="expertise-section">
      <div className="container">
        {/* Header - Made more prominent */}
        <div className="section-header">
          <h1 className="section-title">Services</h1>
          <h2 className="section-subtitle">OUR EXPERTISE</h2>
        </div>

        {/* Cards */}
        <div className="expertise-grid">
          {displayedItems.map((item, index) => (
            <div key={index} className="expertise-card">
              <div className="icon-wrapper">
                <i className={`${item.icon} card-icon`}></i>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <button className="card-button">
                {item.link} <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>

        {/* View More Button - Only show if there are more than 3 items */}
        {expertiseData.length > 3 && (
          <div className="button-container">
            <button className="view-more-button" onClick={toggleShowAll}>
              {showAll ? "View Less" : "View More"} <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurExpertise;