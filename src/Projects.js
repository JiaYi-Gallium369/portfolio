import "./Projects.css";
import {useState, useEffect} from 'react';
import projectList from "./json/projects.json";
import Slideshow from "./Slideshow";

function Projects() {

    const [categories, setCategories] = useState([]);

    useEffect(() => { 
        setCategories(projectList);
    }, []);

    return (
        <div className="projects" id="projects">
            <ul className="project-list">
                {categories && Object.keys(categories).map((category) => (
                    <section key = {category} className = "project-category">
                        <h3 className = "project-header">{category}</h3>
                        <p>(Click on the pictures/titles to access the links!)</p>
                            {categories && <Slideshow items={categories[category]} />}
                    </section>
                ))}
            </ul>
        </div>
    )
}

export default Projects;