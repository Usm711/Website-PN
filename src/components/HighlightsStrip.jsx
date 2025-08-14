import React from "react";
import "../Css/HighlightsStrip.css";

function HighlightsStrip() {
  return (
    <div className="highlights-strip">
      <div className="highlight-box">
        <div className="icon-container">
          <i className="fas fa-check-square icon"></i>
        </div>
        <p>
          <strong>100+ Projects</strong><br />
          Successfully Delivered
        </p>
      </div>
      <div className="highlight-box">
        <div className="icon-container">
          <i className="fas fa-clock icon"></i>
        </div>
        <p>
          <strong>On-Time, Every Time</strong><br />
          – Proven Delivery
        </p>
      </div>
      <div className="highlight-box">
        <div className="icon-container">
          <i className="fas fa-user-friends icon"></i>
        </div>
        <p>
          <strong>Clients Across</strong><br />
          10+ Countries
        </p>
      </div>
      <div className="highlight-box">
        <div className="icon-container">
          <i className="fas fa-chart-line icon"></i>
        </div>
        <p>
          <strong>Real Results,</strong><br />
          Real Impact
        </p>
      </div>
    </div>
  );
}

export default HighlightsStrip;
