import "./Work.css";
import {useState, useEffect} from 'react';
import workList from "./json/work.json";
import Slideshow from "./Slideshow";

function Work() {

    const [categories, setCategories] = useState([]);

    useEffect(() => { 
        setCategories(workList);
    }, []);

    return (
        <div className="work" id="work-experience">
            <h2 className = "work-header">Work Experience</h2>
                <ul className="work-list">
                    {categories && Object.keys(categories).map((category) => (
                    <section key = {category} className = "work-category">
                            {categories && <Slideshow items={categories[category]} category={category} />}
                    </section>
                    ))}
                </ul>
        </div>
    );
}

export default Work;
