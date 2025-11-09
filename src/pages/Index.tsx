import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduccion from "@/components/Introduccion";
import NormasSeguridad from "@/components/NormasSeguridad";
import GuiaMantenimiento from "@/components/GuiaMantenimiento";
import HerramientasMantenimiento from "@/components/HerramientasMantenimiento";
import Comunidad from "@/components/Comunidad";
import InventarioComponentes from "@/components/InventarioComponentes";
import FuncionComponentes from "@/components/FuncionComponentes";
import Glosario from "@/components/Glosario";
import Equipo from "@/components/Equipo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Introduccion />
      <NormasSeguridad />
      <GuiaMantenimiento />
      <HerramientasMantenimiento />
      <Comunidad />
      <InventarioComponentes />
      <FuncionComponentes />
      <Glosario />
      <Equipo />
      <Footer />
    </div>
  );
};

export default Index;
