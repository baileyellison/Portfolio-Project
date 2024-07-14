import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components for each section
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// // Import assets
import GitHub from './assets/images/githubicon.png';
import LinkedIn from './assets/images/LinkedInIcon.png';
import Email from './assets/images/emailIcon.png';
import ResumePDF from './assets/Resume2024.pdf';
import Project1 from './assets/images/Project1.png';
import Project2 from './assets/images/Project2.png';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Navigation />

        <div className="card">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
