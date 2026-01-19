import React, { useState } from 'react'; // Importar useState
import { Link } from 'react-router-dom';
import { useProjectStatus } from '../hooks/useProjectStatus';
import { FaGithub, FaExternalLinkAlt, FaLock, FaExclamationTriangle } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const status = useProjectStatus(project.demoUrl);
  const [imgSrc, setImgSrc] = useState(project.image); // Estado para la imagen

  // Función para manejar imagen rota
  const handleImgError = () => {
    // Reemplaza con un placeholder elegante de un paisaje abstracto
    setImgSrc("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop");
  };

  const getPrimaryButton = () => {
    if (project.tags.includes("En construcción")) {
      return (
        <span className="btn btn-disabled" style={{ background: '#334155', cursor: 'not-allowed', color: '#94a3b8' }}>
          En desarrollo
        </span>
      );
    }

    // 2. Cargando (Solo si NO está en construcción)
    if (status === 'loading') {
      return <button className="btn btn-disabled">⏳ Verificando...</button>;
    }
    
    // 3. Proyecto Privado
    if (status === 'internal') {
        return (
            <Link to={project.demoUrl} className="btn btn-primary">
              <FaLock /> Solicitar Acceso
            </Link>
        );
    }

    // 4. Proyecto Online
    if (status === 'online') {
      return (
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-success">
          <FaExternalLinkAlt /> Ver Demo
        </a>
      );
    }

    // 5. Fallo de red / CORS (Botón amigable)
    return (
      <a 
        href={project.demoUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-glass"
        title="Abrir proyecto en nueva pestaña"
      >
        <span></span> Ver Demo
      </a>
    );
  };
    

  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img 
          src={imgSrc} 
          alt={project.title} 
          className="card-img" 
          onError={handleImgError} // <-- AQUÍ ESTÁ LA MAGIA DE LA IMAGEN
        />
        {/* Badge opcional */}
        {status === 'online' && <div className="status-badge success"><span className="dot"></span>Live</div>}
      </div>
      
      <div className="card-body">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <div className="tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="btn-group">
          {/* Este es tu botón principal (Ver Demo / En Desarrollo / etc) */}
          {getPrimaryButton()}
          
          {!project.tags.includes("En construcción") && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
              title="Ver código en GitHub"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;