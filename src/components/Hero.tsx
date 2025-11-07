import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToIntro = () => {
    const element = document.querySelector("#introduccion");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-gradient opacity-5"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
          Manual Técnico
          <span className="block text-primary mt-2">de Mantenimiento</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-in">
          Guía completa e interactiva sobre mantenimiento de sistemas informáticos
        </p>
        <Button
          onClick={scrollToIntro}
          size="lg"
          className="animate-fade-in hover-lift"
        >
          Comenzar
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
