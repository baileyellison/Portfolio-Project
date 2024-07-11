import React from 'react';
import './Resume.css'; // Optional: Import a separate CSS file for styling

const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <h2>Resume</h2>
        <p>
          Download my resume{' '}
          <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">
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
          {/* Add more proficiencies as needed */}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
