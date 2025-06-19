import "./Others.css";
import pfp from "./images/pfp.jpg";
import wit_careertalk from "./images/wit_careertalk.png";
import wit_arts from "./images/wit_arts.png";
import wit_humanlib from "./images/wit_humanlib.png";
import wit_picnic from "./images/wit_picnic.png";

function About() {
    return (
        <div className="container">
            <div className="about">
                <div className="image-container" id="about">
                    <img src={pfp} alt="My Picture!" className="pfp"/>
                    <a href="#about-content"><h2 className="overlay-text">About Me</h2></a>
                </div>
                <div className="about-content" id="about-content">
                <p>
                    Hi! I am Jia Yi, a third-year Computer Science student at the National University of Singapore (NUS). 
                    With a passion for UI/UX and a strong foundation in software development, 
                    I am eager to contribute to projects that aim for providing a user-centric experience.
                    I have experience in full-stack web development, 
                    having worked on various projects that involve both frontend and backend technologies.
                </p>
                <p>
                    I also have a keen interest in exploring the field of cybersecurity,
                    and I am always looking for opportunities to learn and grow in this area.
                </p>
            </div>
            </div>
            <div className="education" id="education">
                <h2>My Education - National University of Singapore (NUS)</h2>
                <ul className ="education-list">
                    <li>Bachelor of Computing in Computer Science at NUS, with a Physics in Technology minor.</li>
                    <li>NUS ASEAN Undergraduate Scholarship Recipient.</li>
                    <h4>Relevant Coursework:</h4>
                    <ul className="course-box">
                        <li>Information Security</li>
                        <li>Operating Systems</li>
                        <li>Computer Networks</li>
                        <li>Software Engineering</li>
                        <li>Computer Organization</li>
                        <li>Data Structures and Algorithms</li>
                        <li>Object Oriented Programming</li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

function Skills() {
    return (
        <div className="skills" id="skills">
            <h2>Skills</h2>
            <div className="main-skill-container">
                <div className="main-skill-box">
                    <h3>Frontend Development</h3>
                    <ul className="skill-box">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>FXML</li>
                        <li>Blockly</li>
                    </ul>
                </div>
                <div className="main-skill-box">
                <h3>Backend Development</h3>
                <ul className="skill-box">
                    <li>Django</li>
                    <li>PostgreSQL</li>
                    <li>Firebase</li>
                    <li>Google Cloud Storage</li>
                    <li>Microsoft Azure</li>
                </ul>
                </div>
                <div className="main-skill-box">
                <h3>Programming Languages</h3>
                <ul className="skill-box">
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>JavaScript</li>
                </ul>
                </div>
                <div className="main-skill-box">
                <h3>Design & Documentation Tools</h3>
                <ul className="skill-box">
                    <li>Figma</li>
                    <li>Canva</li>
                    <li>PlantUML</li>
                </ul>
                </div>
                <div className="main-skill-box">
                <h3>APIs</h3>
                <ul className="skill-box">
                    <li>Telegram Bot API</li>
                    <li>Google Maps API</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

function Interests() {
    return (
        <div className="interests" id="interests">
            <h2>Interests</h2>
            <h3>Graphic Designing - Women in Tech @ NUS Computing Events</h3>
            <div className="pics">
                <img src={wit_careertalk} alt=""></img>
                <img src={wit_arts} alt=""></img>
                <img src={wit_humanlib} alt=""></img>
                <img src={wit_picnic} alt=""></img>
            </div>
            <h3>Theatre and Musical Productions</h3>
            <h4>NUS Raffles Hall Musical Production</h4>
            <p>2025 - Scriptwriter, composer and cellist. (ongoing)</p>
            <div className="rhmp-container">
            {/* <div className="video-container">
                
            </div> */}
            <div className="video-container">
                <p>2024 - Head of Composers' department and cellist.</p>
                <iframe src="https://www.youtube.com/embed/PZ8bknpo15o?si=_u2DzbGltTMip8L4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="video-container">
                <p>2023 - BGM Composer and cellist.</p>
                <iframe src="https://www.youtube.com/embed/PQOIgndb_-Q?si=9TYpeKkGRJyO1KMr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>
        </div>
    )
}

function Contact() {
    return (
        <nav className="contact" id="contact">
            <h2>Contact</h2>
            <p>
                Feel free to reach out to me via email at <a href="mailto:seah.jiayi@u.nus.edu">seah.jiayi@u.nus.edu</a>.
            </p>
        </nav>
    )
}

export { About, Skills, Interests, Contact };
