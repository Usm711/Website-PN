import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import "../Css/PortfolioMain.css";

const PortfolioMain = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger on component mount
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".portfolio-item").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const filters = [
    "All",
    "Networking Project",
    "Custom Software",
    "UI/UX Design",
    "App Development",
    "Digital Marketing"
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Cloud Network Setup for FinPlus",
      description: "End-to-end cloud-based networking and firewall system for a refresh client.",
      tags: ["Networking", "Security", "AWS"],
      category: "Networking Project",
      width: "large",
      image: "port1"
    },
    {
      id: 2,
      title: "Smart Surveillance System for TechMart",
      description: "Designed and installed a comprehensive CCTV and IP camera network for multi-flickr.",
      tags: ["CCTV installation", "IP cameras"],
      category: "Networking Project",
      width: "small",
      image: "port2"
    },
    {
      id: 3,
      title: "Company Website for MedConnect",
      description: "Designed and developed a secure, responsive website for a digital healthcare platform.",
      tags: ["WordPress", "Security", "UX Designing"],
      category: "UI/UX Design",
      width: "small",
      image: "port3"
    },
    {
      id: 4,
      title: "Digital Marketing for NeoCyro",
      description: "Full-scale marketing strategy with social media, SEO, and ad campaigns.",
      tags: ["SEO", "Meta Ads", "Google Analytics"],
      category: "Digital Marketing",
      width: "large",
      image: "port4"
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="portfolio-main-outside">
      <section className={`portfolio-main ${isVisible ? "visible" : ""}`}>
        <div className="main">
          <div className="PortfolioUpper">
            <div className="upperContent">
              <p>\ Portfolio \</p>
              <h1>SEE WHAT WE'VE BUILT</h1>
            </div>
            <div className="upperContentBelow">
              {filters.map((filter) => (
                <div
                  key={filter}
                  className={`upperContentBelow-inside ${activeFilter === filter ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Items */} 
          <div className="portfolio-items-container">
            {/* First Row */}
            <div className="portfolio-row">
              {filteredItems.slice(0, 2).map((item) => (
                <div 
                  key={item.id}
                  className={`portfolio-item portfolio-item${item.id} ${item.width === "large" ? "large" : "small"}`}
                >
                  <div className="portfolio-item-content">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="tags-container">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    <button className="portfolio-item-button">
                      View Project <FaArrowRight className="arrow-icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="portfolio-row">
              {filteredItems.slice(2, 4).map((item) => (
                <div 
                  key={item.id}
                  className={`portfolio-item portfolio-item${item.id} ${item.width === "large" ? "large" : "small"}`}
                >
                  <div className="portfolio-item-content">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="tags-container">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    <button className="portfolio-item-button">
                      View Project <FaArrowRight className="arrow-icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="view-more-container">
              <button className="view-more-button">
                View More <FaArrowRight className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PortfolioMain;