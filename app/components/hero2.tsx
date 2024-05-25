import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from "next/image";

interface Hero2Props {
  imgData: StaticImageData;
  imgAlt: string;
  imgData2: StaticImageData;
  imgAlt2: string;
  title: string;
  name: string;
  ubication: string;
  email: string;
  text: string;
}

export default function Hero2(props: Hero2Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative text-white bg-black bg-opacity-75 p-4">
      <Image
        src={props.imgData}
        alt={props.imgAlt}
        width={200}
        height={200}
        className="rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-10"
      />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-50"
        style={{
          backgroundImage: `url(${props.imgData2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      />
      <div className="relative z-10 text-center mt-4">
        <h2 className="text-5xl font-bold text-red-500 mb-4">{props.title}</h2>
        <div className="max-w-xl mx-auto p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-red-500 mb-2">¿Quién soy?</h3>
            <p className="text-lg text-white">Nombre: {props.name}</p>
            <p className="text-lg text-white">Ubicación: {props.ubication}</p>
            <p className="text-lg text-white">Correo Electrónico: {props.email}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-red-500 mb-2">Habilidades</h3>
            <ul className="list-disc list-inside text-lg text-white">
              <li>Sabe hacer arroz</li>
              <li>Sabe hacer huevo frito</li>
              <li>Sabe hablar lesco</li>
              <li>Sabe cómo ser su propio jefe</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-red-500 mb-2">Recomendaciones</h3>
            <ul className="list-disc list-inside text-lg text-white">
              <li>Mark Zuckerberg</li>
              <li>Barack Obama</li>
              <li>Cristiano Ronaldo</li>
              <li>Luis Barquero Villalobos</li>
              <li>Neil Armstrong</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-red-500 mb-2">Experiencias Laborales</h3>
            <ul className="list-disc list-inside text-lg text-white">
              <li>Amigo del chino quien creo la Abaco</li>
              <li>Compañero de Neil Armstrong</li>
              <li>Compañero de cuarto de Lionel Messi</li>
              <li>Amigo de Juan Santamaria</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-red-500 mb-2">Sobre mí</h3>
            <p className="text-lg text-white">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
