import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";

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
    title: "Creating a Lean Design System",
    type: "UI/UX",
    image: "/images/project2.jpg",
    description:
      "Developing an efficient and scalable design system for modern applications.",
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

  // Animation for projects on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(portfolioProjects);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Filter projects functionality
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
            }`}
            onClick={() => openProjectDetails(project)}
          >
            <div
              className="portfolio-image"
              style={{ backgroundImage: `url(${project.image})` }}
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
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeProjectDetails}>
              &times;
            </button>
            <div
              className="project-modal-image"
              style={{ backgroundImage: `url(${selectedProject.image})` }}
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
                <button className="btn primary">View Project</button>
                <button className="btn secondary">Case Study</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
