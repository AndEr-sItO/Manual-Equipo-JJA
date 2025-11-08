import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import destornilladores from "@/assets/herramientas/destornilladores.jpg";
import pulseraAntiestatica from "@/assets/herramientas/pulsera-antiestatica.jpg";
import separadorTornillos from "@/assets/herramientas/separador-tornillos.jpg";
import iman from "@/assets/herramientas/iman.jpg";
import pinzas from "@/assets/herramientas/pinzas.jpg";
import alfombrillaAntiestatica from "@/assets/herramientas/alfombrilla-antiestatica.jpg";
import speccy from "@/assets/herramientas/speccy.jpg";
import crystaldiskinfo from "@/assets/herramientas/crystaldiskinfo.jpg";
import antivirus from "@/assets/herramientas/antivirus.jpg";
import memoryDiagnostic from "@/assets/herramientas/memory-diagnostic.jpg";
import usbTester from "@/assets/herramientas/usb-tester.jpg";
import cableTester from "@/assets/herramientas/cable-tester.jpg";
import outletTester from "@/assets/herramientas/outlet-tester.jpg";
import linterna from "@/assets/herramientas/linterna.jpg";
import brocha from "@/assets/herramientas/brocha.jpg";
import multimetro from "@/assets/herramientas/multimetro.jpg";
import sopladora from "@/assets/herramientas/sopladora.jpg";
import trapoAntiestatico from "@/assets/herramientas/trapo-antiestatico.jpg";
import cepilloSuave from "@/assets/herramientas/cepillo-suave.jpg";
import borradorNata from "@/assets/herramientas/borrador-nata.jpg";
import removedorSoldadura from "@/assets/herramientas/removedor-soldadura.jpg";
import pelaCables from "@/assets/herramientas/pela-cables.jpg";
import cautin from "@/assets/herramientas/cautin.jpg";
import alcoholIsopropilico from "@/assets/herramientas/alcohol-isopropilico.jpg";
import estano from "@/assets/herramientas/estano.jpg";
import pastaTermica from "@/assets/herramientas/pasta-termica.jpg";

const HerramientasMantenimiento = () => {
  const herramientasEnsamblaje = [
    {
      name: "Destornillador",
      description: "Es una herramienta que se utiliza para apretar o aflojar tornillos (Tipos, Destornillador de cabeza Philips, Destornillador plano trapezoidal, Destornillador Pozidriv, Destornillador Allen)",
      image: destornilladores
    },
    {
      name: "Pulsera Antiestática",
      description: "Es un dispositivo que se ajusta a la muñeca y se conecta a una fuente de tierra para mantenerte libre de energía estática.",
      image: pulseraAntiestatica
    },
    {
      name: "Separador de tornillos",
      description: "Se utiliza para separar tornillos a la hora de extraerlos, asi cuando se extraen se pueden organizar para saber de qué parte del gabinete es.",
      image: separadorTornillos
    },
    {
      name: "Imán",
      description: "Es usado cuando algún tornillo cae en lugares difíciles de sacar, pero hay que tener en cuenta que puede dañar alguna parte del PC, asi que evitar tocar cualquier parte.",
      image: iman
    },
    {
      name: "Pinzas",
      description: "Se utilizan principalmente para manipular y posicionar componentes pequeños o de difícil acceso.",
      image: pinzas
    },
    {
      name: "Alfombrilla antiestática",
      description: "Alejan la electricidad estática de algún componente y la transfieren de manera segura desde el equipo hasta un punto de conexión de tierra.",
      image: alfombrillaAntiestatica
    }
  ];

  const herramientasSoftware = [
    {
      name: "Speccy",
      description: "Muestra información del equipo (memoria, disco, temperatura, procesador) en un solo lugar y de forma muy sencilla.",
      link: "https://www.ccleaner.com/es-es/speccy/download?srsltid=AfmBOopzJqTE9ALnlEZFmQdKt7ty9eOY_oD8SYPrdEXp6fDPNd5CzSo5",
      image: speccy
    },
    {
      name: "CrystalDiskInfo",
      description: "Permite saber si el disco duro o SSD está en buen estado. Usa colores para indicar el estado: azul (bien), amarillo (cuidado), rojo (problema).",
      link: "https://crystalmark.info/en/download",
      image: crystaldiskinfo
    },
    {
      name: "Antivirus",
      description: "Detecta y elimina virus con solo presionar un botón. Ideal para revisar si el equipo está lento por malware.",
      image: antivirus
    },
    {
      name: "Windows Memory Diagnostic",
      description: "Herramienta incluida en Windows que revisa la memoria RAM para saber si tiene errores.",
      image: memoryDiagnostic
    }
  ];

  const herramientasFisicasDiagnostico = [
    {
      name: "Probador de puertos USB (USB Tester)",
      description: "Permite verificar si un puerto USB funciona al conectar una pequeña luz o indicador.",
      image: usbTester
    },
    {
      name: "Probador de cables de red sencillo",
      description: "Sirve para revisar si un cable de red está en buen estado. Solo se conecta y muestra si funciona.",
      image: cableTester
    },
    {
      name: "Probador de toma corriente",
      description: "Se conecta al enchufe y enciende luces para indicar si hay un problema eléctrico básico. Fácil de interpretar.",
      image: outletTester
    },
    {
      name: "Linterna pequeña",
      description: "Para ayudar a revisar conexiones, puertos y verificar visualmente si un cable o pieza está correctamente conectada.",
      image: linterna
    }
  ];

  const herramientasPreventivo = [
    {
      name: "Brocha",
      description: "Son usadas por lo regular para la limpieza interna del pc.",
      image: brocha
    },
    {
      name: "Multímetro",
      description: "Cumple múltiples funciones en el mantenimiento de una PC al permitir medir voltaje, corriente y resistencia, lo cual es crucial para diagnosticar y prevenir problemas eléctricos.",
      image: multimetro
    },
    {
      name: "Sopladora",
      description: "Sirve para eliminar el polvo de manera segura y eficiente de componentes internos, como ventiladores, disipadores y ranuras de expansión",
      image: sopladora
    },
    {
      name: "Trapo antiestático o franela blanca",
      description: "Se utiliza para limpiar las superficies sin rayarlas, y liberándolas de residuos",
      image: trapoAntiestatico
    },
    {
      name: "Cepillo suave",
      description: "Para sacar y quitar mugre que sea de facil acceso en el computo.",
      image: cepilloSuave
    },
    {
      name: "Borrador nata",
      description: "Utilizado para limpiar la memoria RAM.",
      image: borradorNata
    }
  ];

  const herramientasCorrectivo = [
    {
      name: "Removedor de soldadura",
      description: "Sirve para retirar la soldadura de estaño fundida de una placa base, para permitir la extracción y sustitución de componentes electrónicos dañados o defectuosos.",
      image: removedorSoldadura
    },
    {
      name: "Pela cables",
      description: "Sirve para retirar de manera precisa y segura la cubierta protectora (aislamiento) de los cables eléctricos sin dañar los conductores internos de cobre.",
      image: pelaCables
    },
    {
      name: "Cautín",
      description: "Sirve para realizar reparaciones a nivel de componente electrónico mediante la aplicación de soldadura.",
      image: cautin
    }
  ];

  const productosQuimicos = [
    {
      name: "Alcohol Isopropilico",
      description: "Sire como un solvente de limpieza seguro y eficaz para componentes electrónicos, debido a que se evapora rápidamente sin dejar residuos.",
      image: alcoholIsopropilico
    },
    {
      name: "Estaño para soldar",
      description: "es fundamental en la reparación de PC, ya que sirve para crear conexiones eléctricas estables y uniones mecánicas seguras entre los componentes electrónicos y la placa base.",
      image: estano
    },
    {
      name: "Pasta térmica",
      description: "Sirve para mejorar la transferencia de calor entre el procesador (CPU, y también la GPU) y su disipador o sistema de refrigeración.",
      image: pastaTermica
    }
  ];

  return (
    <section id="herramientas-mantenimiento" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm">Equipamiento</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Herramientas para mantenimiento
          </h2>
        </div>

        <Tabs defaultValue="ensamblaje" className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-5 mb-8">
            <TabsTrigger value="ensamblaje">Ensamblaje</TabsTrigger>
            <TabsTrigger value="diagnostico">Diagnóstico</TabsTrigger>
            <TabsTrigger value="preventivo">Preventivo</TabsTrigger>
            <TabsTrigger value="correctivo">Correctivo</TabsTrigger>
            <TabsTrigger value="quimicos">Químicos</TabsTrigger>
          </TabsList>

          <TabsContent value="ensamblaje">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-3">Herramientas para el ensamblaje</h3>
              <p className="text-lg text-muted-foreground mb-8">
                <span className="font-semibold">Función:</span> Son utilizadas para ensamblar y desensamblar todas las partes del equipo de computo
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {herramientasEnsamblaje.map((herramienta, index) => (
                <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={herramienta.image} 
                      alt={herramienta.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">• {herramienta.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{herramienta.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="diagnostico">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-3">Herramientas de Diagnóstico</h3>
              <p className="text-lg text-muted-foreground mb-8">
                <span className="font-semibold">Función:</span> identificar el origen de fallas o problemas en computadoras y equipos tecnológicos. Permiten revisar, analizar y detectar si algún componente físico (hardware) o programa (software) está funcionando de manera incorrecta, ayudando a encontrar la causa del fallo antes de repararlo.
              </p>
              
              <h4 className="text-2xl font-bold mb-6">Herramientas de Software</h4>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {herramientasSoftware.map((herramienta, index) => (
                  <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={herramienta.image} 
                        alt={herramienta.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">• {herramienta.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{herramienta.description}</p>
                      {herramienta.link && (
                        <a 
                          href={herramienta.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm break-all"
                        >
                          Link: {herramienta.link}
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h4 className="text-2xl font-bold mb-6">Herramientas Físicas de Diagnóstico</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {herramientasFisicasDiagnostico.map((herramienta, index) => (
                  <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={herramienta.image} 
                        alt={herramienta.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">• {herramienta.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{herramienta.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preventivo">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-3">Herramientas para el mantenimiento preventivo</h3>
              <p className="text-lg text-muted-foreground mb-8">
                <span className="font-semibold">Función:</span> Son aquellas que se utilizan con el fin de prevenir el surgimiento de averías en los artefactos
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {herramientasPreventivo.map((herramienta, index) => (
                <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={herramienta.image} 
                      alt={herramienta.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">• {herramienta.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{herramienta.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="correctivo">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-3">Herramientas para el Mantenimiento Correctivo</h3>
              <p className="text-lg text-muted-foreground mb-8">
                <span className="font-semibold">Función:</span> Son aquellas que tienen que tienen la capacidad de reparar alguna parte del equipo de cómputo, que este fallando en el momento o algún defecto presente.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {herramientasCorrectivo.map((herramienta, index) => (
                <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={herramienta.image} 
                      alt={herramienta.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">• {herramienta.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{herramienta.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quimicos">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-3">Productos Químicos</h3>
              <p className="text-lg text-muted-foreground mb-8">
                <span className="font-semibold">Función:</span> Son los diferentes químicos que ayudan a complementar el mantenimiento necesario para el equipo.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {productosQuimicos.map((producto, index) => (
                <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={producto.image} 
                      alt={producto.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">• {producto.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{producto.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HerramientasMantenimiento;
