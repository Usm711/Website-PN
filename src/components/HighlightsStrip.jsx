import React from "react";
import { FaCheckSquare, FaClock, FaGlobeAmericas, FaChartLine } from "react-icons/fa";
import "../Css/HighlightsStrip.css";

function HighlightsStrip() {
  return (
    <div className="highlights-strip">
      <div className="highlight-container">
        <div className="highlight-box">
          <div className="icon-container">
            <FaCheckSquare className="icon" />
          </div>
          <div className="text-content">
            <h3>100+ Projects</h3>
            <p>Successfully Delivered</p>
          </div>
        </div>

        <div className="highlight-box">
          <div className="icon-container">
            <FaClock className="icon" />
          </div>
          <div className="text-content">
            <h3>On-Time, Every Time</h3>
            <p>Proven Delivery</p>
          </div>
        </div>

        <div className="highlight-box">
          <div className="icon-container">
            <FaGlobeAmericas className="icon" />
          </div>
          <div className="text-content">
            <h3>Clients Across</h3>
            <p>10+ Countries</p>
          </div>
        </div>

        <div className="highlight-box">
          <div className="icon-container">
            <FaChartLine className="icon" />
          </div>
          <div className="text-content">
            <h3>Real Results</h3>
            <p>Real Impact</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightsStrip;