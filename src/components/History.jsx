import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/History.css";

const History = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact"); // This will navigate to your Contact page
  };

  return (
    <div className="history">
      <div className="history-banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <p className="history-text">
              "Some of the History of Our Company is that<br />
              we are Catching up through Video"
            </p>
            <button 
              className="contact-button"
              onClick={handleContactClick}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;