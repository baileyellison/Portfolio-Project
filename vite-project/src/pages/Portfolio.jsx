import React from 'react';
import Project from '../components/Project'; // Import Project component
import project1 from '../assets/images/Project1.png';
import project2 from '../assets/images/Project2.png';

const Portfolio = () => {
  // Example project data (replace with your actual project data)
  const projects = [
    {
      title: 'Work Day Scheduler',
      image: project1,
      deployedLink: 'https://baileyellison.github.io/ThirdPartyAPI-s-CodeRefractor-Work-Day-Calendar/',
      githubLink: 'https://github.com/baileyellison/ThirdPartyAPI-s-CodeRefractor-Work-Day-Calendar/',
    },
    {
      title: 'DataSnake - A Snake Game',
      image: project2,
      deployedLink: 'https://group4-project2-c23a5470e6d9.herokuapp.com/',
      githubLink: 'https://github.com/ajprobel/datasnake',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2 className="Portfolio">Portfolio</h2>
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
