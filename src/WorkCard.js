const WorkCard = ({ work }) => {

    return (
    <div key={work.role} className="work-item">
        <div className="work-content">
                <div className="work-title">
                    <h3>{work.role}</h3>
                    <h4>at {work.where} </h4>
                    [{work.duration}]
                </div>
                <div className="vertical-line"></div>
                <div className="work-text">
                    {work.description.map((point, i) => (
                        <p key={i}><div dangerouslySetInnerHTML={{ __html: `&#x2611;`+' '+ point }} /></p>
                    ))}
                </div>
        </div>
    </div>
    );
};

export default WorkCard;