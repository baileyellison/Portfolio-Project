import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Import components for each section
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// Import assets
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Header /> {/* Include your Header component here if you have one */}

        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>

        {/* Navigation Component */}
        <Navigation />

        <div className="card">
          <Switch>
            <Route exact path="/">
              <AboutMe />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Footer />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Router>
  );
}

export default App;