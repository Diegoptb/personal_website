import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Portafolio de Data Science</h1>
        <p>Hola, soy [Tu Nombre]. Aquí expongo mis análisis y modelos.</p>
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