import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <header className="main-header">
        <div className="logo">
          <Link to="/">Hemil</Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </header>

      <main className="main-content">{children}</main>

      <footer className="main-footer">
        <div className="footer-content">
          <p>&copy; 2025 Hemil. All rights reserved.</p>
          <nav className="footer-nav">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
