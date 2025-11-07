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
    <section id="introduccion" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm">Fundamentos</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            ¿Qué es el Mantenimiento?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            El mantenimiento informático es el conjunto de acciones y procedimientos 
            destinados a conservar o restablecer el funcionamiento óptimo de los equipos 
            de cómputo y sus componentes.
          </p>
        </div>

        <div className="mb-16 bg-accent rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-accent-foreground">Importancia del Mantenimiento</h3>
          <ul className="space-y-3 text-lg text-accent-foreground/90">
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>Garantiza el funcionamiento continuo y eficiente de los sistemas informáticos</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>Previene pérdidas de datos y tiempo de inactividad costoso</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>Aumenta la seguridad y protección de la información</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-2xl">•</span>
              <span>Optimiza el rendimiento y la velocidad de los equipos</span>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {maintenanceTypes.map((type, index) => (
            <Card key={index} className="card-hover hover-lift shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-foreground">Beneficios:</h4>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-secondary mr-2 text-lg">✓</span>
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
