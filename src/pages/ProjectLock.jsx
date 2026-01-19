import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaLock, FaEnvelope, FaArrowLeft, FaLinkedin } from 'react-icons/fa';

const ProjectLock = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return (
    <div className="container" style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h2>Proyecto no encontrado</h2>
      <Link to="/" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>Volver</Link>
    </div>
  );

  return (
    <div className="lock-container">
      <div className="lock-card">
        {/* Icono Principal con efecto de brillo */}
        <div className="icon-wrapper">
          <FaLock className="lock-icon" />
        </div>

        <h2 className="lock-title">Acceso Restringido</h2>
        <h3 className="project-name">{project.title}</h3>
        
        <p className="lock-description">
          Este proyecto contiene despliegues en vivo, datos sensibles corporativos o requiere recursos de alto cómputo.
          <br /><br />
          Para ver la demostración completa, la arquitectura y el código fuente, por favor solicita acceso directo:
        </p>

        <div className="cta-group">
          <a href="mailto:diegoptb19@gmail.com" className="btn btn-primary">
            <FaEnvelope /> Solicitar por Correo
          </a>
          
        </div>

        <div className="footer-link">
          <Link to="/" className="back-link-styled">
            <FaArrowLeft /> Volver al Portafolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectLock;