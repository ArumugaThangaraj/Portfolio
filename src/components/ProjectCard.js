import React, { useState, useEffect } from "react";
import '../App.css';

const ProjectCard = ({ title, imgSrc, description, githubLink, linkedinLink, liveLink }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    let timer;
    if (flipped) {
      timer = setTimeout(() => setFlipped(false), 120000); // Auto flip after 2 minutes
    }
    return () => clearTimeout(timer);
  }, [flipped]);

  return (
    <div className="col-md-4 mb-4">
      <div className={`project-card ${flipped ? "flipped" : ""}`}>
        <div className="project-card-inner">

          {/* Front side */}
          <div className="card-front shadow-sm">
            <img src={imgSrc} className="card-img-top" alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <div className="mt-3 mb-2  ">
                <a href={githubLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary me-2">GitHub</a>
                {linkedinLink && (
                  <a href={linkedinLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-info">LinkedIn</a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-success me-2"
                  >
                    Live
                  </a>
                )}
              </div>
              <button className="btn btn-sm btn-secondary" onClick={() => setFlipped(true)}>
                Description
              </button>
            </div>
          </div>

          {/* Back side */}
          <div className="card-back shadow-sm">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <div className="mt-5">
                <h5 className="card-title mb-3">{title} Details</h5>
                <p>{description}</p>
              </div>
              <button className="btn btn-sm btn-secondary" onClick={() => setFlipped(false)}>
                Back
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default ProjectCard;
