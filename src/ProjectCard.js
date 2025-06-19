const Card = ({ project }) => {
    const images = require.context('./images', false, /./i);
    const imageKeys = images.keys();
    const imagePathKey = imageKeys.find(key => key.includes(project.image));
    console.log(project.image);
    const imagePath = images(imagePathKey);
    console.log(imagePath);


    return (
    <li key={project.name} className="project-item">
        <div className="project-content">
            <div className="project-text">
                <h4><a href={project.link}>{project.name}</a></h4>
                <p>{project.description}</p>
                <p>Technologies: {project.technologies.join(", ")}</p>
            </div>
            <div>                                    
                {project.image && (
                <a href={project.link}><img src={imagePath} alt={project.name}></img></a>
                )}
                </div>
                </div>
                </li>
    );
};

export default Card;