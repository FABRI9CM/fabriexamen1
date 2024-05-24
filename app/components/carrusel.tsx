'use client';

import React, { useEffect } from 'react';
import { loadRepositories } from './Utils';

export default function Carrusel(){
  useEffect(() => {

      loadRepositories('project-carousel');
      
      
    
  }, []);
  return (
    <div className="w-full bg-gradient-to-r from-gray-950 to-gray-500">
      <h2 className="text-white shadow-lg shadow-orange-500/50 text-4xl font-bold mb-4 ">Mis Proyectos</h2>
      <div className="bg-gradient-to-r from-gray-950 to-gray-500 flex overflow-x-auto snap-x snap-mandatory space-x-4" id="project-carousel">
        
        {
      
        }
      </div>
    </div>
  );
};

