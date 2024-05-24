
import React from "react";
import Hero from "@/app/components/hero";
import Carrusel from "@/app/components/carrusel";
import projectImg from "/public/SILLA.jpg";

export default function Edit() {
  return (
    <div>
      <Hero 
        imgData={projectImg} 
        imgAlt=""
        title="Proyectos personales" 
        text="Aquí se encontrarán los proyectos en los que he participado o he creado." 
      />
      <Carrusel />
    </div>
  );
}