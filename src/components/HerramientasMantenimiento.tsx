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
      name: "Probador de tomacorrientes (Outlet Tester)",
      description: "Dispositivo pequeño que se conecta a un enchufe para verificar si el tomacorriente tiene corriente y si la conexión a tierra es correcta.",
      image: outletTester
    },
    {
      name: "Linterna o lámpara LED portátil",
      description: "Útil para observar con claridad el interior del gabinete, especialmente en lugares oscuros o con poca luz. Algunos técnicos usan linternas con banda para cabeza.",
      image: linterna
    },
    {
      name: "Brocha de cerdas suaves",
      description: "Para limpiar componentes internos y acumular polvo para luego ser eliminado con aire comprimido.",
      image: brocha
    },
    {
      name: "Multímetro",
      description: "Instrumento que permite medir magnitudes eléctricas como voltajes, corriente y resistencias. Se utiliza para identificar fallos en componentes electrónicos.",
      image: multimetro
    }
  ];

  const herramientasPreventivo = [
    {
      name: "Sopladora de aire comprimido",
      description: "Se utiliza para expulsar polvo y partículas de lugares difíciles de alcanzar, como ventiladores, disipadores y ranuras.",
      image: sopladora
    },
    {
      name: "Trapo antiestático (microfibra)",
      description: "Absorbe el polvo sin rayar o generar estática en los componentes.",
      image: trapoAntiestatico
    },
    {
      name: "Cepillo de cerdas suaves",
      description: "Ideal para aflojar el polvo en componentes delicados antes de aplicar aire comprimido.",
      image: cepilloSuave
    },
    {
      name: "Borrador de nata",
      description: "Se usa para limpiar contactos de tarjetas, memorias RAM o conectores sucios.",
      image: borradorNata
    }
  ];

  const herramientasCorrectivo = [
    {
      name: "Removedor de soldadura (malla o succionador)",
      description: "Sirve para quitar soldadura de componentes dañados o desoldados de una placa.",
      image: removedorSoldadura
    },
    {
      name: "Pela cables",
      description: "Herramienta para pelar y cortar cables de forma precisa sin dañar el conductor interno.",
      image: pelaCables
    },
    {
      name: "Cautín o soldador eléctrico",
      description: "Sirve para soldar componentes electrónicos o reparar circuitos dañados.",
      image: cautin
    }
  ];

  const productosQuimicos = [
    {
      name: "Alcohol isopropílico (al 90% o superior)",
      description: "Limpia contactos eléctricos, disipadores y componentes sin dejar residuos. Se evapora rápidamente y no conduce electricidad.",
      image: alcoholIsopropilico
    },
    {
      name: "Estaño (para soldar)",
      description: "Material que, al calentarse con el cautín, une componentes electrónicos a las placas.",
      image: estano
    },
    {
      name: "Pasta térmica",
      description: "Se aplica entre el procesador y el disipador para mejorar la transferencia de calor y evitar sobrecalentamiento.",
      image: pastaTermica
    }
  ];

  return (
    <section id="herramientas" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-3 text-xs">🛠️ Herramientas</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Herramientas para el Mantenimiento
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Descubre las herramientas esenciales para el mantenimiento de computadoras
          </p>
        </div>

        <Tabs defaultValue="ensamblaje" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 h-auto">
            <TabsTrigger value="ensamblaje" className="text-xs sm:text-sm">Ensamblaje</TabsTrigger>
            <TabsTrigger value="diagnostico" className="text-xs sm:text-sm">Diagnóstico</TabsTrigger>
            <TabsTrigger value="preventivo" className="text-xs sm:text-sm">Preventivo</TabsTrigger>
            <TabsTrigger value="correctivo" className="text-xs sm:text-sm">Correctivo</TabsTrigger>
            <TabsTrigger value="quimicos" className="text-xs sm:text-sm">Químicos</TabsTrigger>
          </TabsList>

          <TabsContent value="ensamblaje">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Herramientas para el ensamblaje</h3>
              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold">Función:</span> Son utilizadas para ensamblar y desensamblar todas las partes del equipo de computo
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {herramientasEnsamblaje.map((herramienta, index) => (
                <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                  <div className="relative h-36">
                    <img 
                      src={herramienta.image} 
                      alt={herramienta.name}
                      className="w-full h-full object-cover bg-muted rounded-t-lg"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">• {herramienta.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-3">
                    <p className="text-muted-foreground text-xs leading-relaxed">{herramienta.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="diagnostico">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Herramientas de Diagnóstico</h3>
              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold">Función:</span> identificar el origen de fallas o problemas en computadoras y equipos tecnológicos.
              </p>
              
              <h4 className="text-lg font-bold mb-4">💻 Software</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {herramientasSoftware.map((herramienta, index) => (
                  <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                    <div className="relative h-36">
                      <img 
                        src={herramienta.image} 
                        alt={herramienta.name}
                        className="w-full h-full object-cover bg-muted rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">• {herramienta.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pb-3">
                      <p className="text-muted-foreground mb-2 text-xs leading-relaxed">{herramienta.description}</p>
                      {herramienta.link && (
                        <a 
                          href={herramienta.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-[10px] break-all"
                        >
                          Link: {herramienta.link}
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h4 className="text-lg font-bold mb-4">🔧 Físicas</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {herramientasFisicasDiagnostico.map((herramienta, index) => (
                  <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                    <div className="relative h-32">
                      <img 
                        src={herramienta.image} 
                        alt={herramienta.name}
                        className="w-full h-full object-cover bg-muted rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">• {herramienta.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pb-3">
                      <p className="text-muted-foreground text-xs leading-relaxed">{herramienta.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preventivo">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Herramientas para el mantenimiento preventivo</h3>
              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold">Función:</span> Son aquellas que se utilizan con el fin de prevenir el surgimiento de averías en los artefactos
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {herramientasPreventivo.map((herramienta, index) => (
                <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                  <div className="relative h-36">
                    <img 
                      src={herramienta.image} 
                      alt={herramienta.name}
                      className="w-full h-full object-cover bg-muted rounded-t-lg"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">• {herramienta.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-3">
                    <p className="text-muted-foreground text-xs leading-relaxed">{herramienta.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="correctivo">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Herramientas para el Mantenimiento Correctivo</h3>
              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold">Función:</span> Son aquellas que tienen la capacidad de reparar alguna parte del equipo de cómputo.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {herramientasCorrectivo.map((herramienta, index) => (
                <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                  <div className="relative h-36">
                    <img 
                      src={herramienta.image} 
                      alt={herramienta.name}
                      className="w-full h-full object-cover bg-muted rounded-t-lg"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">• {herramienta.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-3">
                    <p className="text-muted-foreground text-xs leading-relaxed">{herramienta.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quimicos">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Productos Químicos</h3>
              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold">Función:</span> Son los diferentes químicos que ayudan a complementar el mantenimiento necesario para el equipo.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {productosQuimicos.map((producto, index) => (
                <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                  <div className="relative h-36">
                    <img 
                      src={producto.image} 
                      alt={producto.name}
                      className="w-full h-full object-cover bg-muted rounded-t-lg"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">• {producto.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-3">
                    <p className="text-muted-foreground text-xs leading-relaxed">{producto.description}</p>
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
