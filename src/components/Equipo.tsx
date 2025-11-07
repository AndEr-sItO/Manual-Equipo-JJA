import { User, Mail, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Equipo = () => {
  const teamMembers = [
    {
      name: "María González",
      role: "Líder del Proyecto",
      description: "Coordinación general y documentación del manual técnico.",
      initials: "MG",
      email: "maria.gonzalez@email.com",
      color: "bg-primary"
    },
    {
      name: "Carlos Rodríguez",
      role: "Especialista en Hardware",
      description: "Investigación y documentación de componentes físicos.",
      initials: "CR",
      email: "carlos.rodriguez@email.com",
      color: "bg-secondary"
    },
    {
      name: "Ana Martínez",
      role: "Especialista en Software",
      description: "Desarrollo de contenido sobre sistemas operativos y aplicaciones.",
      initials: "AM",
      email: "ana.martinez@email.com",
      color: "bg-primary"
    },
    {
      name: "Luis Fernández",
      role: "Desarrollador Web",
      description: "Diseño e implementación del sitio web interactivo.",
      initials: "LF",
      email: "luis.fernandez@email.com",
      color: "bg-secondary"
    }
  ];

  return (
    <section id="equipo" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm">Conoce al Equipo</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Equipo Desarrollador
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce a los profesionales que han trabajado en la creación de este 
            manual técnico interactivo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="card-hover hover-lift shadow-card text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className={`h-24 w-24 ${member.color}`}>
                    <AvatarFallback className="text-2xl font-bold text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <Badge variant="secondary" className="text-xs">
                    {member.role}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span>{member.email}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-tech-gradient text-white border-0 shadow-hover">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-4">
                Trabajo en Equipo
              </h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Este proyecto es el resultado del esfuerzo colaborativo de estudiantes 
                comprometidos con la excelencia educativa y la innovación tecnológica.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Equipo;
