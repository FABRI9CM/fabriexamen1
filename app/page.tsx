import Navbar from "./Navbar";
import Hero3 from "./components/hero3";
import Carrusel from "./components/carrusel";
import styles from './page.module.css';
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Navbar />
      <div className={styles.content}>
        <Hero3
          imgData="" 
          imgAlt="Hero Image"
          title=""
          text=""
        />
        <Carrusel />
      </div>
    </div>
  );
}


