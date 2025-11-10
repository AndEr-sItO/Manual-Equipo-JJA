import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";
import memoriaRamImg from "@/assets/componentes/memoria-ram.jpg";
import discoDuroImg from "@/assets/componentes/disco-duro.jpg";
import fuentePoderImg from "@/assets/componentes/fuente-poder.jpg";
import procesadorImg from "@/assets/componentes/procesador.jpg";
import tarjetaMadreImg from "@/assets/componentes/tarjeta-madre.jpg";
import gabineteImg from "@/assets/componentes/gabinete.jpg";
import monitorImg from "@/assets/componentes/monitor.jpg";
import tecladoImg from "@/assets/componentes/teclado.jpg";
import mouseImg from "@/assets/componentes/mouse.jpg";

const FuncionComponentes = () => {
  const componentesInternos = [
    {
      nombre: "MEMORIA RAM",
      imagen: memoriaRamImg,
      descripcion: "Es la memoria que almacena de forma temporal los programas y datos que estás usando activamente, para que puedas acceder a ellos rápidamente sin tener que buscarlos en el disco duro.",
      fallas: [
        "La PC se reinicia sola o muestra pantallazos azules (Blue Screen).",
        "La computadora no arranca o emite pitidos al encender (falla de módulos)."
      ]
    },
    {
      nombre: "DISCO DURO",
      imagen: discoDuroImg,
      descripcion: "Un disco duro es un dispositivo de almacenamiento de datos que guarda información como fotos, documentos y programas.",
      fallas: [
        "Archivos o programas tardan mucho en abrir o se congela el sistema constantemente.",
        "Sonidos extraños como \"clic-clic\" (indica daño físico interno)."
      ]
    },
    {
      nombre: "FUENTE DE PODER",
      imagen: fuentePoderImg,
      descripcion: "La fuente de poder toma la energía de la pared y la convierte en la cantidad y tipo exacto de energía que cada parte de la computadora necesita.",
      fallas: [
        "El computador no enciende o se apaga de repente.",
        "Olor a quemado o ruido extraño del ventilador de la fuente."
      ]
    },
    {
      nombre: "PROCESADOR (CPU)",
      imagen: procesadorImg,
      descripcion: "El procesador es el cerebro de una computadora; es el componente principal que ejecuta instrucciones, realiza cálculos y coordina las funciones de otros componentes de hardware.",
      fallas: [
        "Sobrecalentamiento (ventilador muy ruidoso y se pone lenta).",
        "Fallas en el rendimiento: programas se cierran o tardan en procesar tareas."
      ]
    },
    {
      nombre: "TARJETA MADRE",
      imagen: tarjetaMadreImg,
      descripcion: "La tarjeta madre es el circuito principal de una computadora, funcionando como su \"sistema nervioso\" o columna vertebral. Su propósito es conectar e integrar todos los demás componentes del PC (procesador, memoria, almacenamiento, etc.)",
      fallas: [
        "Capacitores hinchados o con fuga, causando reinicios o apagados.",
        "No reconoce dispositivos como RAM, teclado o disco duro."
      ]
    }
  ];

  const componentesExternos = [
    {
      nombre: "GABINETE",
      imagen: gabineteImg,
      descripcion: "Es la estructura que alberga y protege los componentes internos esenciales, como la placa base, el procesador, la memoria, el disco duro y la fuente de alimentación.",
      fallas: [
        "Golpes o abolladuras que dificultan cerrar o abrir la tapa.",
        "Mala ventilación por acumulación de polvo o mala ubicación (causa sobrecalentamiento)."
      ]
    },
    {
      nombre: "MONITOR",
      imagen: monitorImg,
      descripcion: "El monitor es un dispositivo que se usa para mostrar información visual como imágenes y texto.",
      fallas: [
        "Pantalla negra o sin señal aunque la computadora esté encendida.",
        "Colores distorsionados o líneas horizontales/verticales."
      ]
    },
    {
      nombre: "TECLADO",
      imagen: tecladoImg,
      descripcion: "Es un dispositivo que permite escribir texto y comandos mediante la pulsación de teclas.",
      fallas: [
        "Algunas teclas no funcionan o quedan pegadas.",
        "Escribe caracteres incorrectos o múltiples al presionar una tecla."
      ]
    },
    {
      nombre: "MOUSE O RATÓN",
      imagen: mouseImg,
      descripcion: "Un mouse es un dispositivo que se utiliza para controlar el puntero del cursor en la pantalla de una computadora y ejecutar acciones como hacer clic y arrastrar.",
      fallas: [
        "El puntero se mueve solo o no responde al movimiento.",
        "Clic izquierdo o derecho no funciona correctamente."
      ]
    }
  ];

  const ComponentCard = ({ componente }: { componente: any }) => (
    <Card className="shadow-card card-hover overflow-hidden">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img 
          src={componente.imagen} 
          alt={componente.nombre} 
          className="w-full h-full object-cover bg-muted"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{componente.nombre}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pb-4">
        <div>
          <h4 className="font-semibold mb-1.5 text-sm">Descripción:</h4>
          <p className="text-muted-foreground leading-relaxed text-xs">
            {componente.descripcion}
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-sm flex items-center gap-1.5">
            <AlertCircle className="h-4 w-4 text-destructive" />
            Fallas Comunes:
          </h4>
          <ul className="space-y-1.5">
            {componente.fallas.map((falla: string, index: number) => (
              <li key={index} className="flex gap-2 text-muted-foreground text-xs">
                <span className="text-destructive mt-0.5">•</span>
                <span>{falla}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="funcion-componentes" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-3 text-xs">⚙️ Componentes</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Función de los Componentes
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Conoce la función, descripción y fallas comunes de cada componente de la computadora
          </p>
        </div>

        <Tabs defaultValue="internos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="internos" className="text-sm">
              Componentes Internos
            </TabsTrigger>
            <TabsTrigger value="externos" className="text-sm">
              Componentes Externos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="internos">
            <div className="grid md:grid-cols-2 gap-6">
              {componentesInternos.map((componente, index) => (
                <ComponentCard key={index} componente={componente} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="externos">
            <div className="grid md:grid-cols-2 gap-6">
              {componentesExternos.map((componente, index) => (
                <ComponentCard key={index} componente={componente} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FuncionComponentes;
