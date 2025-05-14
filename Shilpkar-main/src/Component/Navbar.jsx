import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-area">
          <span className="logo-text">Shilpkar</span>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        {/* Menu */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        {/* Right Actions */}
        <div className="right-actions">
          <FaSearch className="search-icon" />
          <button className="quote-btn">Request A Quote</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
