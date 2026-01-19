import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { FaPython, FaReact, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiPandas, SiScikitlearn} from 'react-icons/si';

const Home = () => {
  // Configuración de tu Tech Stack con colores oficiales
  const techStack = [
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'SQL', icon: <FaDatabase />, color: '#f2f2f2' }, 
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Pandas', icon: <SiPandas />, color: '#150458' }, 
    { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Portafolio de proyectos personales</h1>
        <p>Hola, me llamo Diego Pérez Tabullo. Esta es mi página web personal.</p>
        
        {/* SECCIÓN TECH STACK CON LOGOS */}
        <div className="tech-stack-container">
          <p className="tech-label">Tecnologías principales:</p>
          <div className="tech-icons">
            {techStack.map((tech) => (
              <div key={tech.name} className="tech-badge" style={{ borderColor: tech.color }}>
                <span className="tech-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </header>
      
      <div className="grid">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
};

export default Home;