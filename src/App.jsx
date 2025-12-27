import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectLock from './pages/ProjectLock';
import './App.css'; // Usaremos estilos simples

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectLock />} />
      </Routes>
    </Router>
  );
}

export default App;