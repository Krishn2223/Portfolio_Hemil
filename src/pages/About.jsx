import React from "react";
import "../styles/About.css";

const About = () => {
  const photos = [
    { src: "/images/photo1.jpg", alt: "Mini me" },
    { src: "/images/photo2.jpg", alt: "Sunny Mumbai" },
    { src: "/images/photo3.jpg", alt: "Home sweet home" },
    { src: "/images/photo4.jpg", alt: "My workspace" },
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>About</h1>
          <p>I'm a product designer based in sunny Mumbai, India.</p>
          <p>
            Since 2015, I've enjoyed turning complex problems into simple,
            beautiful and intuitive designs. When I'm not pushing pixels, you'll
            find me cooking, gardening or working out in the park.
          </p>
        </div>
        <div className="about-image">
          <div className="profile-image"></div>
        </div>
      </div>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
