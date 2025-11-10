import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Glosario = () => {
  const terminos = [
    {
      termino: "Antivirus / Antimalware",
      definicion: "Programa que detecta, elimina y previene software dañino en una computadora.",
    },
    {
      termino: "Cortocircuito",
      definicion: "Contacto no deseado entre dos puntos eléctricos que provoca daño o riesgo.",
    },
    {
      termino: "Componente",
      definicion: "Parte individual del hardware del computador (ej: RAM, disco duro, fuente de poder).",
    },
    {
      termino: "Descarga Electrostática (ESD)",
      definicion: "Corriente eléctrica inesperada que se transfiere al tocar componentes, capaz de dañarlos.",
    },
    {
      termino: "Diagnóstico",
      definicion: "Proceso de identificar fallas o irregularidades en el funcionamiento del computador.",
    },
    {
      termino: "Drivers / Controladores",
      definicion: "Programas que permiten que los componentes de hardware funcionen correctamente con el sistema operativo.",
    },
    {
      termino: "GPU (Tarjeta Gráfica)",
      definicion: "Componente responsable de mostrar video e imágenes.",
    },
    {
      termino: "Hardware",
      definicion: "Componentes físicos de una computadora, como el monitor, teclado, procesador o cables.",
    },
    {
      termino: "Malware",
      definicion: "Software malicioso diseñado para dañar, infiltrarse o alterar el funcionamiento de una computadora, dispositivo o red sin permiso del usuario.",
    },
    {
      termino: "Periférico",
      definicion: "Dispositivo externo que se conecta a la computadora (mouse, teclado, impresora, monitor).",
    },
    {
      termino: "Protección Personal (EPP)",
      definicion: "Elementos de seguridad usados por técnicos como guantes, lentes o mascarillas.",
    },
    {
      termino: "SATA",
      definicion: "Tipo de cable usado para conectar dispositivos como discos duros y unidades lectoras.",
    },
    {
      termino: "Software",
      definicion: "Programas y sistemas que permiten que la computadora funcione, como el sistema operativo o aplicaciones.",
    },
  ];

  return (
    <section id="glosario" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-3 text-xs">📚 Referencia</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Glosario de Términos Técnicos
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Definiciones clave para comprender el mantenimiento de computadoras
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {terminos.map((item, index) => (
            <Card key={index} className="shadow-card card-hover">
              <CardContent className="pt-4 pb-4">
                <h3 className="text-base font-bold mb-2 text-primary">
                  {item.termino}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-xs">
                  {item.definicion}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glosario;
