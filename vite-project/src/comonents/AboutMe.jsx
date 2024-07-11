import React from 'react';
import avatar from '../assets/avatar.jpg'; // Adjust the path based on your actual file structure
import './AboutMe.css'; // Optional: Import a separate CSS file for styling

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="avatar-container">
        <img src={avatar} className="avatar" alt="Avatar" />
      </div>
      <p className="bio">
        Insert your short bio text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus condimentum finibus neque, sed varius libero porttitor ac.
      </p>
    </div>
  );
}

export default AboutMe;
