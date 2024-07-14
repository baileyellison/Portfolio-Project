import React from 'react';
import ResumePDF from '../assets/Resume2024.pdf';

const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <h2>Resume</h2>
        <p>
          Download my resume{' '}
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </p>
        <h3>Developer Proficiencies</h3>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Node.js & Express</li>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
          <li>SQL & NoSQL databases</li>
          <li>Git</li>
          <li>Webpack</li>
          <li>Figma</li>
          <li>Bootstrap</li>
          <li>Heroku</li>
          <li>MongoDB, MySQL</li>
          <li>Handlebars</li>
          <li>jQuery</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
