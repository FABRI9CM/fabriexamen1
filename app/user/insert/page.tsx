import React from "react";
import Hero2 from "@/app/components/hero2";
import galleryImg2 from "/public/es.jpg";
import galleryImg from "/public/foto.jpg";

export default function Insert() {
  return (
    <div>
      <Hero2
        imgData={galleryImg}
        imgAlt="imagen personal"
        imgData2={galleryImg2}
        imgAlt2="Fondo"
        title="Sobre mí"
        name="Fabricio Castro pero me puedes decir Fabri"
        ubication="Soy de Costa Rica, Puntarenas, mi lugar de origen es Buenos Aires pero vivo actualmente en Golfito"
        email="fcastromar23@gmail.com"
        text="Aparte de lo laboral, soy una persona que le gusta mucho el deporte y super dedicado en lo que me gusta hacer, y tengo muy presente los valores de solidaridad y humildad."
      />
    </div>
  );
}
