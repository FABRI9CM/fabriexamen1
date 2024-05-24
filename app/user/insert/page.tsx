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
        name="Dilan Chavarria Valdez"
        ubication="Costa Rica, Puntarenas, Golfito, Golfito"
        email="dilanchava48@gmail.com"
        text="Soy una persona activa que puede resolver problemas en el momento y que no tiene problemas con los demás colaboradores en el trabajo."
      />
    </div>
  );
}
