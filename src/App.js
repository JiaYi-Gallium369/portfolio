import './App.css';
import {useState, useEffect} from "react";
import { About, Skills, Interests, Contact } from "./Others";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Work from "./Work";
import Projects from "./Projects";

function App() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <title>Jia Yi's Page</title>
      <nav className={`navbar ${isTop? 'top' : ''}`}>
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
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work-experience">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#interests">Interests</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <Router>
        <Routes>
          <Route path = "/" element={
            <>
            <About />
            <Skills />
            <Work />
            <Projects />
            <Interests />
            </>
          }/>
          {/* <Route path = "/skills" element={<Skills />}/>
          <Route path = "/work-experience" element={<Work />}/>
          <Route path = "/projects" element={<Projects />}/>
          <Route path = "/interests" element={<Interests />}/> */}
        </Routes>
      </Router>
      <Contact />
    </div>
  );
}

export default App;
