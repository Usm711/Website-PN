import React from "react";
import "../Css/ProcessSection.css"; // keep your custom CSS

const ProcessSection = ({processSteps}) => {
  

  return (
    <section className="process-section">

      <div className="process-container">
        <div className="process-header">
          <p className="process-subtitle">\\ Planning //</p>
          <h2 className="process-title">OUR PROCESS</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.number} className="service-card">
              <div className="service-icon">
                <i className={step.iconClass}></i>
              </div>
              <h3 className="service-title">{step.title}</h3>
              <div className="service-underline">
                <span></span>
                <span></span>
              </div>
              <p className="service-text">{step.description}</p>
              <a href="#" className="service-btn">
                Learn More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
