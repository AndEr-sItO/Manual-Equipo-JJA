import { Building2, Target, Eye, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Comunidad = () => {
  const institutionInfo = [
    {
      icon: Building2,
      title: "Historia",
      content: "Nuestra institución educativa cuenta con más de 20 años formando profesionales en tecnología y sistemas informáticos, manteniéndose a la vanguardia en educación técnica."
    },
    {
      icon: Target,
      title: "Misión",
      content: "Formar profesionales competentes en el área de tecnología, proporcionando conocimientos técnicos y prácticos que les permitan desenvolverse exitosamente en el ámbito laboral."
    },
    {
      icon: Eye,
      title: "Visión",
      content: "Ser una institución líder reconocida por la excelencia en la formación técnica, promoviendo la innovación y el desarrollo tecnológico en nuestra comunidad."
    },
    {
      icon: Lightbulb,
      title: "Objetivo",
      content: "Desarrollar competencias técnicas en mantenimiento de sistemas informáticos, capacitando a los estudiantes para diagnosticar, prevenir y solucionar problemas de hardware y software."
    }
  ];

  return (
    <section id="comunidad" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm">Nosotros</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Nuestra Comunidad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce más sobre nuestra institución educativa y nuestro compromiso 
            con la formación técnica de excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {institutionInfo.map((item, index) => (
            <Card key={index} className="card-hover hover-lift shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-tech-gradient text-white border-0 shadow-hover">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-4">
                Educación Técnica de Calidad
              </h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Nuestro programa de mantenimiento informático está diseñado para 
                proporcionar las habilidades prácticas y teóricas necesarias para 
                destacar en la industria tecnológica.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Comunidad;
