import "./Work.css";

function Work() {
    return (
        <div className="work" id="work-experience">
            <h2>Work Experience</h2>
                <div className="work-item">
                    <p><strong>Full-Stack Developer (Research Assistant)</strong> <br/>
                    at NUS Feel Singapore Research Project
                    [Jul 2025 - Present]</p>
                    <ul>
<li>Redesigned the frontend of a crowdsourced data platform with HTML, CSS and JavaScript, improving visual appeal and user engagement in collaboration with a UI/UX designer and cross-faculty professors.</li>
        <li>Implemented interactive map visualizations with Leaflet, enabling intuitive navigation and cross-device responsiveness.</li>
        <li>Optimized codebase for improved readability and long-term maintainability and maintained Firebase backend to securely store user data and manage authentication, enabling efficient and structured data retrieval for research analysis.</li>

    
        </ul>
                </div>

        <div className="work-item">
                    <p><strong>Software Engineer Intern</strong> <br/>
                    at NUS Enterprise - Minimum Viable Product (MVP) Studio
                    [Jan 2025 - Jun 2025]</p>
                    <ul>
                    <li>Collaborated with a team of 5 to develop a bioacoustics data management system for an NUS research project using <strong>React, Django</strong> and <strong>PostgreSQL</strong>.</li>
                    <li>Created interactive and user-friendly data visualizations using <strong>Plotly</strong> and <strong>Google Maps API</strong>, enhancing usability and accessibility for researchers.</li>
                    <li>Automated ML data pipeline using <strong>Power Automate</strong>, <strong>Python</strong> and <strong>MLFlow</strong>, improving overall efficiency in processing workflows. </li>
                    <li>Implemented and automated audio data storage using <strong>Python</strong> to <strong>Google Cloud Storage</strong>, significantly reducing manual data entry time.</li>
                    </ul>
                </div>
        </div>
    );
}

export default Work;
