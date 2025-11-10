import { Wrench, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Introduccion = () => {
  const maintenanceTypes = [
    {
      title: "Mantenimiento Preventivo",
      icon: Shield,
      description: "Acciones planificadas para evitar fallos y prolongar la vida útil del equipo.",
      benefits: [
        "Reduce el riesgo de fallos inesperados",
        "Prolonga la vida útil del hardware",
        "Mejora el rendimiento del sistema",
        "Ahorra costos a largo plazo"
      ]
    },
    {
      title: "Mantenimiento Correctivo",
      icon: Wrench,
      description: "Reparación de componentes o sistemas que han presentado fallos o averías.",
      benefits: [
        "Soluciona problemas existentes",
        "Restaura la funcionalidad del equipo",
        "Identifica causas de fallos",
        "Previene daños mayores"
      ]
    }
  ];

  return (
    <section id="introduccion" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-3 text-xs">📖 Fundamentos</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            ¿Qué es el Mantenimiento?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            El mantenimiento informático es el conjunto de acciones y procedimientos 
            destinados a conservar o restablecer el funcionamiento óptimo de los equipos 
            de cómputo y sus componentes.
          </p>
        </div>

        <div className="mb-10 bg-accent rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-accent-foreground">✨ Importancia del Mantenimiento</h3>
          <ul className="space-y-2.5 text-sm text-accent-foreground/90">
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span>Garantiza el funcionamiento continuo y eficiente de los sistemas informáticos</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span>Previene pérdidas de datos y tiempo de inactividad costoso</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span>Aumenta la seguridad y protección de la información</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span>Optimiza el rendimiento y la velocidad de los equipos</span>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {maintenanceTypes.map((type, index) => (
            <Card key={index} className="card-hover hover-lift shadow-card">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <type.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2.5 text-foreground text-sm">Beneficios:</h4>
                <ul className="space-y-1.5">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-xs text-muted-foreground">
                      <span className="text-secondary mr-1.5 text-base">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduccion;
