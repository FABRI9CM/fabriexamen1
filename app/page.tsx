// pages/index.tsx
import Navbar from "./Navbar";
import Hero3 from "./components/hero3";
import Carrusel from "./components/carrusel";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/IMAGE4.jpg')` }}>
      <Navbar />
      <Hero3
        imgData="/IMAGE4.jpg" 
        imgAlt="Hero Image"
        title="Welcome to My Site"
        text="This is the hero section of the page."
      />
      <Carrusel />
    </div>
  );
}

