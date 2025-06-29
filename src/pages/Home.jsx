import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const [activeSection, setActiveSection] = useState("designer");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) => (prev === "designer" ? "coder" : "designer"));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      <div className={`split-container ${activeSection}`}>
        <Link to="/portfolio" className="designer-section">
          <div className="content">
            <h1>designer</h1>
            <p>
              UI/UX designer specializing in creative and intuitive interfaces.
            </p>
          </div>
          <div className="background"></div>
        </Link>

        <Link to="/portfolio" className="coder-section">
          <div className="content">
            <h1>&lt;coder&gt;</h1>
            <p>
              Front-end developer who writes clean, elegant, and efficient code.
            </p>
          </div>
          <div className="background"></div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
