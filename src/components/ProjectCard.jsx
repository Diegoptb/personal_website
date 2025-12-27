import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} className="card-img" />
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        {}
        <Link to={`/project/${project.id}`} className="btn-primary">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;