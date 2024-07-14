import React from 'react';
import GitHub from '../assets/images/githubicon.png';
import LinkedIn from '../assets/images/LinkedInIcon.png';
import Email from '../assets/images/emailIcon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/baileyellison" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="GitHub"/>
          </a>
          <a href="https://www.linkedin.com/in/baileyeellison/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn"/>
          </a>
          <a href="mailto:beeusc2018@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={Email} alt="Email"/>
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
