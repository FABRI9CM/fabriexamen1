// components/Carrusel.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './carrusel.css';

interface Project {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Carrusel: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/FABRI9CM/repos');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="carrusel">
      {projects.length > 0 && (
        <>
          <div className="carrusel-item">
            <h3>{projects[currentIndex].name}</h3>
            <p>{projects[currentIndex].description}</p>
            <a href={projects[currentIndex].html_url} target="_blank" rel="noopener noreferrer">
              Ver en GitHub
            </a>
          </div>
          <button onClick={prevSlide}>Prev</button>
          <button onClick={nextSlide}>Next</button>
        </>
      )}
    </div>
  );
};

export default Carrusel;
