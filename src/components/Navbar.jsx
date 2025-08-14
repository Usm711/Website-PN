import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Css/Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="/images/99f22c5dae97d0e231016028a9f5e28558581a8d.png"
            alt="PulxeNet Logo"
          />
        </Link>
      </div>

      {/* Mobile menu button - hidden on desktop */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Regular menu for desktop */}
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services & Courses</Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
        </li>
        <li>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </li>
        <li>
          <div className="navbar-button">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button>Get in Touch</button>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;