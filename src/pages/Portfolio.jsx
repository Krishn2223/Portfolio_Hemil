import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";
// Import the images
import webImage from "../assets/images/Obscura-artist-web-1.png";
import mobileImage from "../assets/images/Obscura-artist-mobile-1.png";
import { Link } from "react-router-dom";

const portfolioProjects = [
  {
    id: 1,
    title: "My UI Design Book",
    type: "Web",
    image: "/images/project1.jpg",
    description: "A comprehensive guide to UI design principles and practices.",
    featured: true,
    isNew: true,
  },
  {
    id: 2,
    title: "Obscura Artist Platform",
    type: "UI/UX",
    webImage: webImage,
    mobileImage: mobileImage,
    description:
      "A responsive UI/UX design for artists showcasing their work, with different layouts optimized for web and mobile experiences. The platform allows artists to display their portfolio and connect with potential clients.",
    featured: false,
  },
  {
    id: 3,
    title: "Interior Design News Feed",
    type: "Graphics Design",
    image: "/images/project3.jpg",
    description: "A curated news platform for interior design enthusiasts.",
    isNew: true,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(portfolioProjects);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects =
    filter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.type === filter);

  const projectTypes = [
    "All",
    ...new Set(portfolioProjects.map((project) => project.type)),
  ];

  const openProjectDetails = (project) => {
    setIsAnimating(true);
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = "auto";
    }, 300);
  };

  const getProjectImage = (project) => {
    if (project.type === "UI/UX") {
      return isMobile ? project.mobileImage : project.webImage;
    }
    return project.image;
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>My Creative Portfolio</h1>
        <p>
          Explore a collection of my most impactful design work across various
          platforms and industries.
        </p>
      </div>

      <div className="filter-controls">
        {projectTypes.map((type) => (
          <button
            key={type}
            className={`filter-btn ${filter === type ? "active" : ""}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`portfolio-item ${project.featured ? "featured" : ""} ${
              project.isNew ? "new" : ""
            } ${project.type === "UI/UX" ? "uiux-card" : ""}`}
            onClick={() => openProjectDetails(project)}
          >
            <div
              className="portfolio-image"
              style={{ backgroundImage: `url(${getProjectImage(project)})` }}
            >
              <div className="portfolio-overlay">
                <span className="view-project">View Details</span>
              </div>
            </div>
            <div className="portfolio-item-content">
              <h3>{project.title}</h3>
              <p>{project.type}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className={`project-modal ${isAnimating ? "active" : "closing"}`}
          onClick={closeProjectDetails}
        >
          <div
            className={`project-modal-content ${
              selectedProject.type === "UI/UX" ? "uiux-project" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeProjectDetails}>
              &times;
            </button>

            <div
              className="project-modal-image"
              style={{
                backgroundImage: `url(${getProjectImage(selectedProject)})`,
              }}
            >
              <div className="project-image-overlay"></div>
              <h2 className="project-title-overlay">{selectedProject.title}</h2>
            </div>

            <div className="project-modal-details">
              <div className="project-meta">
                <p className="project-type">{selectedProject.type}</p>
                {selectedProject.isNew && (
                  <span className="project-badge new">New</span>
                )}
              </div>
              <p className="project-description">
                {selectedProject.description}
              </p>
              <div className="project-stats">
                <div className="stat">
                  <span className="stat-number">4.9</span>
                  <span className="stat-label">User Rating</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2023</span>
                  <span className="stat-label">Year</span>
                </div>
                <div className="stat">
                  <span className="stat-number">6</span>
                  <span className="stat-label">Team Size</span>
                </div>
              </div>
              <div className="action-buttons">
                {selectedProject.title === "Obscura Artist Platform" && (
                  <Link to="/obscura" className="btn primary">
                    View Project
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
