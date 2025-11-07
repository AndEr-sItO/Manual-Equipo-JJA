import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduccion from "@/components/Introduccion";
import Comunidad from "@/components/Comunidad";
import Componentes from "@/components/Componentes";
import Equipo from "@/components/Equipo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Introduccion />
      <Comunidad />
      <Componentes />
      <Equipo />
      <Footer />
    </div>
  );
};

export default Index;
