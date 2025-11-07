import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Hecho con <Heart className="h-4 w-4 text-primary fill-primary" /> por el Equipo de Mantenimiento Informático
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 Manual Técnico Interactivo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
