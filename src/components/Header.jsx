import React from "react";
import { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [hideToggleMenu, setHideToggleMenu] = useState(true);

  function handleMenuToggle() {
    setHideToggleMenu((prevState) => !prevState);
  }
  return (
    <header className="header">
      <div className="logo-btn-container">
        <a href="#">
          <h1 className="logo">Josh Manansala</h1>
        </a>
        <button onClick={handleMenuToggle} className="nav-toggle-btn">
          {hideToggleMenu ? "🍙" : "🍘"}
        </button>
      </div>
      <nav className={`navbar ${hideToggleMenu ? "navbar-hide" : ""}`}>
        <ul className="navbar-links">
          <li>
            <a href="#about" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="navbar-link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#skills" className="navbar-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="btn  download-cv">
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
