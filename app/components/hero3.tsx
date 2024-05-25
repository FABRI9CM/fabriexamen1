
"use client";

import Image from 'next/image';
import React from 'react';
import styles from './Hero3.module.css';

interface HeroProps {
  imgData: string;
  imgAlt: string;
  title: string;
  text: string;
}

const Hero3: React.FC<HeroProps> = ({ imgData, imgAlt, title, text }) => {
  return (
    <div className={styles.hero}>
      <Image src={imgData} alt={imgAlt} layout="fill" objectFit="cover" />
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Hero3;
