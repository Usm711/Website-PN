import React from "react";
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
              <div className="portfolio-item portfolio-item1">
                <div className="portfolio-item-content">
                  <h2>Cloud Network Setup for FinPlus</h2>
                  <p>Find the best cloud-based networking and network system to run in the Cloud.</p>
                  <div className="tags-container">
                    <span className="tag">Measuring</span>
                    <span className="tag">Security</span>
                    <span className="tag">Live</span>
                    <span className="tag">Virtual</span>
                    <span className="tag">SaaS</span>
                    <span className="tag">Websafe</span>
                  </div>
                </div>
              </div>

              <div className="portfolio-item portfolio-item2">
                <div className="portfolio-item-content">
                  <h2>Company Website for MedConnect</h2>
                  <p>Calling us via website of a service responsible for the use of our local new platform.</p>
                  <div className="tags-container">
                    <div className="tag-item">
                      <span className="tag-label">webmaster</span>
                    </div>
                    <div className="tag-item">
                      <span className="tag-label">security</span>
                    </div>
                    <div className="tag-item">
                      <span className="tag-label">uxDesigning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="portfolio-row">
              <div className="portfolio-item portfolio-item3">
                <div className="portfolio-item-content">
                  <h2>Smart Surveillance System for TechMart</h2>
                  <p>Designed and installed a comprehensive CSTV and IP computer network for multi-track</p>
                  <div className="tags-container">
                    <div className="tag-item">
                      <span className="tag-label">cctv installation</span>
                    </div>
                    <div className="tag-item">
                      <span className="tag-label">IP channels</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="portfolio-item portfolio-item4">
                <div className="portfolio-item-content">
                  <h2>Digital Marketing for NeoGym</h2>
                  <p>Full-scale marketing strategy with social media, SEO and all campaigns.</p>
                  <div className="tags-container">
                    <div className="tag-item">
                      <span className="tag-label">SEO</span>
                    </div>
                    <div className="tag-item">
                      <span className="tag-label">Meta-Ads</span>
                    </div>
                    <div className="tag-item">
                      <span className="tag-label">Google Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="view-more-container">
              <button className="view-more-button">View More →</button>
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