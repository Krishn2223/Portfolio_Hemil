import React from "react";
import "../styles/Obscura.css";
import webImage from "../assets/images/Obscura-artist-web-1.png";
import mobileImage from "../assets/images/Obscura-artist-mobile-1.png";

const Obscura = () => {
  return (
    <div className="obscura-container">
      <h1 className="obscura-title">Obscura Artist Platform</h1>
      <div className="devices-wrapper">
        {/* Tablet View */}
        <div className="device tablet">
          <img src={webImage} alt="Obscura Web View" className="device-image" />
        </div>

        {/* Mobile View */}
        <div className="device mobile">
          <img
            src={mobileImage}
            alt="Obscura Mobile View"
            className="device-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Obscura;
