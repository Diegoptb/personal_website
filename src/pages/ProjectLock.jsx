import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectLock = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <div className="container lock-screen">
      <Link to="/" className="back-link">← Volver al inicio</Link>
      
      <div className="lock-content">
        <h2>🔒 Acceso Restringido: {project.title}</h2>
        <p>
          Este proyecto contiene despliegues en vivo y datos sensibles o de alto consumo computacional.
        </p>
        <div className="cta-box">
          <p>Para ver la demostración completa y el código fuente, por favor contáctame:</p>
          <a href="mailto:tuemail@ejemplo.com" className="btn-contact">
            Enviar Correo
          </a>
          <p className="small">O búscame en LinkedIn como [Tu Usuario]</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectLock;