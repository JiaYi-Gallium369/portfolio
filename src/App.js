import './App.css';
import {useState} from "react";
import { About, Skills, Interests, Contact } from "./Others";
import Work from "./Work";
import Projects from "./Projects";

function App() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="App">
      <title>Jia Yi's Page</title>
      <nav className="navbar">
        <button className="hamburger" 
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="menu"
          onClick = {() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>
        <h1 className="h1">Jia Yi's Portfolio</h1>
        <ul className={`nav-list ${isMobileMenuOpen ? 'active' : ''}`} id="nemu">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work-experience">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#interests">Interests</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <About />
      <Skills />
      <Work />
      <Projects />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
