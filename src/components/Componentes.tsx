import { Cpu, HardDrive, MemoryStick, Monitor, Keyboard, Mouse, Wifi, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Componentes = () => {
  const hardwareComponents = [
    {
      icon: Cpu,
      name: "Procesador (CPU)",
      description: "Unidad central de procesamiento que ejecuta instrucciones y procesa datos.",
      color: "text-primary"
    },
    {
      icon: MemoryStick,
      name: "Memoria RAM",
      description: "Memoria de acceso aleatorio que almacena temporalmente datos en uso.",
      color: "text-secondary"
    },
    {
      icon: HardDrive,
      name: "Disco Duro",
      description: "Dispositivo de almacenamiento permanente de datos y programas.",
      color: "text-primary"
    },
    {
      icon: Monitor,
      name: "Monitor",
      description: "Dispositivo de salida que muestra la información visual del sistema.",
      color: "text-secondary"
    },
    {
      icon: Keyboard,
      name: "Teclado",
      description: "Dispositivo de entrada principal para introducir texto y comandos.",
      color: "text-primary"
    },
    {
      icon: Mouse,
      name: "Mouse",
      description: "Dispositivo señalador para interactuar con la interfaz gráfica.",
      color: "text-secondary"
    }
  ];

  const softwareComponents = [
    {
      icon: Code,
      name: "Sistema Operativo",
      description: "Software base que gestiona recursos del hardware y ejecuta aplicaciones (Windows, Linux, macOS).",
      color: "text-primary"
    },
    {
      icon: Wifi,
      name: "Drivers",
      description: "Controladores que permiten la comunicación entre el hardware y el sistema operativo.",
      color: "text-secondary"
    },
    {
      icon: Code,
      name: "Aplicaciones",
      description: "Programas diseñados para realizar tareas específicas para el usuario.",
      color: "text-primary"
    },
    {
      icon: Code,
      name: "Firmware",
      description: "Software integrado en componentes de hardware para su funcionamiento básico.",
      color: "text-secondary"
    }
  ];

  return (
    <section id="componentes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm">Tecnología</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Componentes del Sistema
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explora los componentes fundamentales que conforman un sistema informático, 
            tanto hardware como software.
          </p>
        </div>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="hardware" className="text-base">
              Hardware
            </TabsTrigger>
            <TabsTrigger value="software" className="text-base">
              Software
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="animate-fade-in">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareComponents.map((component, index) => (
                <Card key={index} className="card-hover hover-lift shadow-card">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-lg bg-primary/10`}>
                        <component.icon className={`h-6 w-6 ${component.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{component.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {component.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="software" className="animate-fade-in">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {softwareComponents.map((component, index) => (
                <Card key={index} className="card-hover hover-lift shadow-card">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-lg bg-secondary/10`}>
                        <component.icon className={`h-6 w-6 ${component.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{component.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {component.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-accent rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-accent-foreground">
            Interacción Hardware-Software
          </h3>
          <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
            El hardware y software trabajan en conjunto para proporcionar la funcionalidad 
            completa del sistema. El mantenimiento adecuado de ambos es esencial para 
            garantizar un rendimiento óptimo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Componentes;
