import React, { useEffect, useRef } from "react";
import "../Css/MainHeader.css";

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerEl = headerRef.current;

    // Remove and re-add animation class to replay each time
    headerEl.classList.remove("fade-in");
    void headerEl.offsetWidth; // force reflow
    headerEl.classList.add("fade-in");
  }, []);

  return (
    <header ref={headerRef} className="header fade-in">
      
      {/* Left header */}

      <div className="header-left">
        <p className="greenishText">\ We Are Here \</p>
        <h1 className="fontChange">Empowering Your</h1>
        <h1 className="fontChange">Digital Future with us!</h1>
        <p>
          PulxeNet delivers cutting-edge IT solutions — from web development to
          infrastructure services — helping businesses scale, innovate, and
          lead.
        </p>
        <div className="header-buttons">
          <button className="viewButton">
            View More{" "}
            <span role="img" aria-label="right arrow">
              <i className="fa-solid fa-arrow-right-long"></i>
            </span>
          </button>
          <button className="servicesButton">
            Explore Services{" "}
            <span className="plus">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>
        </div>
      </div>

      {/* Right Header for image */}
      <div className="header-right">
        <img src="/images/image.png" alt="PulxeNet header" />
      </div>
    </header>
  );
}

export default Header;
