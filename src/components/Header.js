import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <span>DhruvEdits</span>
      </div>

      {/* Hamburger Icon */}
      <div 
        className="hamburger" 
        onClick={() => setMenuActive(!menuActive)}
      >
        ☰
      </div>

      {/* Navigation Menu */}
      <nav className={`nav-menu ${menuActive ? "active" : ""}`}>
        <a href="#hero" onClick={() => setMenuActive(false)}>Home</a>
        <a href="#about" onClick={() => setMenuActive(false)}>About</a>
        <a href="#services" onClick={() => setMenuActive(false)}>Services</a>
        <a href="#clients" onClick={() => setMenuActive(false)}>Clients</a>
        <a href="#portfolio" onClick={() => setMenuActive(false)}>Portfolio</a>
        <a href="#contact" onClick={() => setMenuActive(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
