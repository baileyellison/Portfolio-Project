// Portfolio.jsx

import React from 'react';
import Project from './Project'; // Import Project component

const Portfolio = () => {
  // Example project data (replace with your actual project data)
  const projects = [
    {
      title: 'Project 1',
      image: '/images/project1.jpg',
      deployedLink: 'https://project1.com',
      githubLink: 'https://github.com/project1',
    },
    {
      title: 'Project 2',
      image: '/images/project2.jpg',
      deployedLink: 'https://project2.com',
      githubLink: 'https://github.com/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
