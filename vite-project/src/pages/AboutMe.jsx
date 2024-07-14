import React from 'react';
import avatar from '../assets/images/Headshot.png'; // Tell webpack this JS file uses this image


const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>YOUR <br></br>FRONTEND <br></br>DEVELOPER</h1>
      <div className="avatar-container">
        <img src={avatar} className="avatar" alt="Avatar" />
      </div>
      <div className="AboutMe">
      <h2>About Me</h2>
      </div>
      <div className="AboutMeSection">
        <h2>Bailey<br></br>Ellison</h2>
        <p className="bio">
        With a passion for aesthetic design and effective UX/UI marketing, frontend web development was a natural fit for me. I am a recent graduate of the University of North Carolina at Chapel Hill's Full Stack Web Development Bootcamp. 
        This rigorous program allowed me to hone skills in HTML, CSS, JavaScript, React and many libraries and packages to make websites render seamlessly.  
        I am excited to bring creative solutions to a team who values innovation and enthusiasm in the field of web development and marketing. 
        </p>
      </div>
      <div className="btnContainer">
        <a href="/portfolio" className="btn">Portfolio</a>
        <a href="/Contact" className="btn">Contact</a>
        <a href="/Resume" className="btn">Resume</a>
      </div>
    </div>
  );
}

export default AboutMe;
