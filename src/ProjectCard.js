const Card = ({ project }) => {
    console.log(project)
    return (
    <li key={project.name} className="project-item">
        <h4><a href={project.link}>{project.name}</a></h4>
        <div className="project-content">
            <div className="project-text">
                <p>{project.description}</p>
                <p>Technologies: {project.technologies.join(", ")}</p>
            </div>
            <div>                                    
                {project.image && (
                <a href={project.link}><img src={project.image} alt={project.name}></img></a>
                )}
                </div>
                </div>
                </li>
    );
};

export default Card;