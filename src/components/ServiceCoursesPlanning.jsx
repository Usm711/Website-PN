import React, { useState } from "react";
import "../Css/ServiceCoursesPlanning.css";

const ServiceCoursesPlanning = ({ processSteps }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hiddenCardContent, setHiddenCardContent] = useState(null);

  const handleButtonClick = (index, step) => {
    if (expandedCard === index) {
      // Collapse if clicking the same card
      setExpandedCard(null);
      setHiddenCardContent(null);
    } else {
      // Expand the clicked card and set content for hidden card
      setExpandedCard(index);
      setHiddenCardContent(step);
    }
  };

  const handleCloseHiddenCard = () => {
    setExpandedCard(null);
    setHiddenCardContent(null);
  };

  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <p className="process-subtitle">\ Services /</p>
          <h2 className="process-title">OUR EXPERTISE</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => {
            const rowIndex = Math.floor(index / 3);
            const isSameRow = expandedCard !== null && Math.floor(expandedCard / 3) === rowIndex;
            const isExpanded = expandedCard === index;
            
            return (
              <div 
                key={step.number} 
                className={`service-card ${isSameRow && !isExpanded ? 'same-row' : ''}`}
                data-index={index}
                data-row={rowIndex}
              >
                <div className="service-icon">
                  <i className={step.iconClass}></i>
                </div>
                <h3 className="service-title">{step.title}</h3>
                <div className="service-underline">
                  <span></span>
                  <span></span>
                </div>
                <p className="service-text">{step.description}</p>
                <button 
                  className="service-btn"
                  onClick={() => handleButtonClick(index, step)}
                >
                  Learn More <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            );
          })}
          
          {/* 13th Hidden Card */}
          <div 
            className={`service-card hidden-card ${hiddenCardContent ? 'visible' : ''}`}
            data-row={expandedCard !== null ? Math.floor(expandedCard / 3) : -1}
          >
            {hiddenCardContent && (
              <>
                <div className="service-icon">
                  <i className={hiddenCardContent.iconClass}></i>
                </div>
                <h3 className="service-title">{hiddenCardContent.title}</h3>
                <div className="service-underline">
                  <span></span>
                  <span></span>
                </div>
                <p className="service-text">{hiddenCardContent.description}</p>
                <p className="service-text">Additional detailed information about this service would appear here. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus autem fugiat qui rem, dicta, magnam reiciendis sequi amet quia, sit eos cumque ipsa? Id praesentium laboriosam non odit in pariatur!.</p>
                <button 
                  className="service-btn close-btn"
                  onClick={handleCloseHiddenCard}
                >
                  View Less <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCoursesPlanning;