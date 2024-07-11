import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noopener noreferrer">
            Stack Overflow
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
