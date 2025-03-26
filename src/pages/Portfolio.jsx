import React, { useState } from "react";
import "../styles/Portfolio.css";

const portfolioProjects = [
  {
    id: 1,
    title: "My UI Design Book",
    type: "Book",
    image: "/images/project1.jpg",
    description: "A comprehensive guide to UI design principles and practices.",
  },
  {
    id: 2,
    title: "Creating a Lean Design System",
    type: "Design System",
    image: "/images/project2.jpg",
    description:
      "Developing an efficient and scalable design system for modern applications.",
  },
  {
    id: 3,
    title: "Interior Design News Feed",
    type: "Side Project",
    image: "/images/project3.jpg",
    description: "A curated news platform for interior design enthusiasts.",
  },
  {
    id: 4,
    title: "E-commerce Mobile App",
    type: "Mobile App",
    image: "/images/project4.jpg",
    description:
      "A user-friendly mobile application for seamless online shopping.",
  },
  {
    id: 5,
    title: "Financial Dashboard",
    type: "Web App",
    image: "/images/project5.jpg",
    description:
      "An intuitive dashboard for tracking and analyzing financial data.",
  },
  {
    id: 6,
    title: "Travel Booking Platform",
    type: "Website",
    image: "/images/project6.jpg",
    description:
      "A comprehensive travel booking website with smooth user experience.",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <p>
        A selection of my recent work. I've worked on web apps, mobile apps,
        branding, and more.
      </p>

      <div className="portfolio-grid">
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            className="portfolio-item"
            onClick={() => openProjectDetails(project)}
          >
            <div
              className="portfolio-image"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="portfolio-item-content">
              <h3>{project.title}</h3>
              <p>{project.type}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="project-modal-content">
            <button className="close-btn" onClick={closeProjectDetails}>
              &times;
            </button>
            <div
              className="project-modal-image"
              style={{ backgroundImage: `url(${selectedProject.image})` }}
            ></div>
            <div className="project-modal-details">
              <h2>{selectedProject.title}</h2>
              <p className="project-type">{selectedProject.type}</p>
              <p className="project-description">
                {selectedProject.description}
              </p>
              <button className="btn">View Project</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
