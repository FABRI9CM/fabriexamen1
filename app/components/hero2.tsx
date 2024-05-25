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
            <p className="text-lg text-white">Mi Nombre: {props.name}</p>
            <p className="text-lg text-white">¿De donde soy?: {props.ubication}</p>
            <p className="text-lg text-white">Correo Electrónico: {props.email}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-red-500 mb-2">Capacidades
</h3>
            <ul className="list-disc list-inside text-lg text-white">
              <li>Tecnico en Redes y Comunicaciones</li>
              <li>Tecnico en Programador y Desarrollador Web</li>
              <li>Manejo 5 idiomas</li>
              <li>Yo Resuelvo</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-red-500 mb-2">¿A quién recomiendo?</h3>
            <ul className="list-disc list-inside text-lg text-white">
              <li>SibajaGod</li>
              <li>Chetosabe</li>
              <li>La soda de Dilan</li>
              <li>Cesarhacker</li>
              <li>JP Maestro pokemon</li>
              <li>Tony(solo en el futbol)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-red-500 mb-2">Experiencias Laborales</h3>
            <ul className="list-disc list-inside text-lg text-white">
              <li>BARBERIA </li>
              <li>COCINA</li>
              <li>Trabajos con Noguera teacher</li>
              <li>Contrateme necesito brete mae</li>
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
