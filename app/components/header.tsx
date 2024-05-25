'use client';
import Link from "next/link";
import React, { useState } from "react";

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-950 w-full absolute text-white z-10 shadow-lg">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-6">
        <div className="flex items-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
          <img src="logo2.png" alt="Imagen del header" className="h-14 mr-3" />
          <Link href="/" className="font-bold text-4xl"></Link>
        </div>
        <div className="hidden md:flex md:space-x-4">
          <Link href="/user/insert" className="hover:text-red-500 text-lg font-bold">
            Sobre mí
          </Link>
          <Link href="/projects" className="hover:text-red-500 text-lg font-bold">
           
          </Link>
          <a
            href="https://www.instagram.com/cast_fxbr1?igsh=MWN5N3R2NW5weWw3aw%3D%3D&utm_source=qr"
            className="hover:text-red-500 text-lg font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contratar
          </a>
        </div>
        <div className="md:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-inset focus:ring-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/user/insert" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
              Sobre mí
            </Link>
            <Link href="/user/edits" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
              Mis Proyectos
            </Link>
            <a
              href="https://www.instagram.com/cast_fxbr1?igsh=MWN5N3R2NW5weWw3aw%3D%3D&utm_source=qr"
              className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contratar
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
