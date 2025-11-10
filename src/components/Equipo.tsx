import { Mail, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import jhoanderImg from "@/assets/equipo/jhoander.jpg";
import johanImg from "@/assets/equipo/johan.jpg";
import felipeImg from "@/assets/equipo/felipe.jpg";

const Equipo = () => {
  const teamMembers = [
    {
      name: "Jhoander Adrian",
      role: "Desarrollador",
      description: "Estudiante de la UPTA \"Federico Brito Figueroa\", Cursante del PNF Informática. Apasionado por la programación y el estudio, prefiere la realización o revisión de códigos.",
      email: "jhoanderalejandroadrianmarcano@gmail.com",
      image: jhoanderImg
    },
    {
      name: "Johan Toledo",
      role: "Desarrollador",
      description: "Estudiante de la UPTA \"Federico Brito Figueroa\", Cursante del PNF Informática. Apasionado por la escritura, la lectura y la programación.",
      email: "johantoledo31261229tiadmimf@gmail.com",
      image: johanImg
    },
    {
      name: "Felipe Tovar",
      role: "Técnico en Hardware",
      description: "Estudiante de la UPTA \"Federico Brito Figueroa\", Cursante del PNF Informática. Apasionado por la programación y la calistenia, prefiere realizar chequeos internos y mantenimientos.",
      email: "felipealfredotovar@gmail.com",
      image: felipeImg
    }
  ];

  return (
    <section id="equipo" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-3 text-xs">👥 Conoce al Equipo</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Equipo Desarrollador
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Conoce a los profesionales que han trabajado en la creación de este manual técnico interactivo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="card-hover hover-lift shadow-card text-center overflow-hidden">
              <div className="h-48 w-full overflow-hidden bg-muted">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3 pt-4">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <div className="flex items-center justify-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-primary" />
                  <Badge variant="secondary" className="text-xs">
                    {member.role}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground break-all">
                  <Mail className="h-3 w-3 flex-shrink-0" />
                  <span className="text-[10px]">{member.email}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Card className="bg-tech-gradient text-white border-0 shadow-hover">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-3">
                🤝 Trabajo en Equipo
              </h3>
              <p className="text-sm text-white/90 max-w-xl mx-auto">
                Este proyecto es el resultado del esfuerzo colaborativo de estudiantes comprometidos con la excelencia educativa y la innovación tecnológica.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Equipo;
