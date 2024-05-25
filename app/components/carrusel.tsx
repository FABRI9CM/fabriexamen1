
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carrusel.module.css'; 

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const Carrusel = () => {
  const [repos, setRepos] = useState<Repo[]>([]);  

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/FABRI9CM/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className={styles.carrusel}>
      <h2>Mis Repositorios</h2>
      <Slider {...settings}>
        {repos.map(repo => (
          <div key={repo.id} className={styles.repoCard}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;
