import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <div className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">Visit Deployed App</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
