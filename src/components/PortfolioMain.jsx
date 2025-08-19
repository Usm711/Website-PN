import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../Css/PortfolioMain.css";

const PortfolioMain = () => {
  return (
    <section className="portfolio-main-outside">
      <section className="portfolio-main">
        <div className="main">
          <div className="PortfolioUpper">
            <div className="upperContent">
              <p>\ Portfolio \</p>
              <h1>SEE WHAT WE'VE BUILT</h1>
            </div>
            <div className="upperContentBelow">
              <div className="upperContentBelow-inside1">All</div>
              <div className="upperContentBelow-inside">Networking Project</div>
              <div className="upperContentBelow-inside">Custom Software</div>
              <div className="upperContentBelow-inside">UI/UX Design</div>
              <div className="upperContentBelow-inside">App Development</div>
              <div className="upperContentBelow-inside">Digital Marketing</div>
            </div>
          </div>

          {/* Portfolio Items */}
          <div className="portfolio-items-container">
            {/* First Row */}
            <div className="portfolio-row">
              <div className="portfolio-item portfolio-item1" style={{ width: "854px" }}>
                <div className="portfolio-item-content">
                  <h2>Cloud Network Setup for FinPlus</h2>
                  <p>End-to-end cloud-based networking and firewall system for a refresh client.</p>
                  <div className="tags-container">
                    <span className="tag">Networking</span>
                    <span className="tag">Security</span>
                    <span className="tag">AWS</span>
                  </div>
                </div>
              </div>

              <div className="portfolio-item portfolio-item2" style={{ width: "504px", height: "480px" }}>
                <div className="portfolio-item-content">
                  <h2>Smart Surveillance System for TechMart.</h2>
                  <p>Designed and installed a comprehensive CCTV and IP camera network for multi-flickr.</p>
                  <div className="tags-container">
                    <span className="tag">CCTV installation</span>
                    <span className="tag">IP cameras</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="portfolio-row">
              <div className="portfolio-item portfolio-item3" style={{ width: "504px", height: "480px" }}>
                <div className="portfolio-item-content">
                  <h2>Company Website for MedConnect</h2>
                  <p>Designed and developed a secure, responsive website for a digital healthcare platform.</p>
                  <div className="tags-container">
                    <span className="tag">WordPress</span>
                    <span className="tag">Security</span>
                    <span className="tag">UX Designing</span>
                  </div>
                </div>
              </div>

              <div className="portfolio-item portfolio-item4" style={{ width: "854px" }}>
                <div className="portfolio-item-content">
                  <h2>Digital Marketing for NeoCyro</h2>
                  <p>Full-scale marketing strategy with social media, SEO, and ad campaigns.</p>
                  <div className="tags-container">
                    <span className="tag">SEO</span>
                    <span className="tag">Meta Ads</span>
                    <span className="tag">Google Analytics</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="view-more-container">
              <button className="view-more-button">
                View More <FaArrowRight className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="portfolio-footer">
          <p className="quote">"Some of the History of Our Company is that we are Catching up through Video."</p>
          <div className="contact-link">
            <span>Get In Touch</span>
            <span className="arrow">→</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default PortfolioMain;