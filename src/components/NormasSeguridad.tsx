import { ShieldAlert } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NormasSeguridad = () => {
  const normas = [
    {
      title: "Desconectar el equipo antes de trabajar",
      description: "Siempre apagar y desconectar el computador de la corriente eléctrica antes de abrir el gabinete o manipular componentes.",
      reason: "Esto previene descargas eléctricas y protege tanto al técnico como al equipo de daños por corriente."
    },
    {
      title: "Evitar trabajar con electricidad estática",
      description: "Usar pulsera antiestática o descargar la estática tocando una superficie metálica antes de tocar los componentes internos.",
      reason: "La electricidad estática puede dañar componentes electrónicos sensibles de forma permanente."
    },
    {
      title: "No trabajar en ambientes húmedos",
      description: "La humedad puede generar cortocircuitos y dañar los componentes.",
      reason: "El agua y la humedad conducen electricidad y pueden provocar fallos en los circuitos."
    },
    {
      title: "No usar limpiadores domésticos",
      description: "Nunca aplicar limpiadores para vidrios, cloro o desengrasantes sobre equipos electrónicos.",
      reason: "Estos productos contienen químicos corrosivos que pueden dañar circuitos, disolver soldaduras o dejar residuos conductivos."
    },
    {
      title: "Utilizar herramientas adecuadas",
      description: "Usar destornilladores imantados, brochas suaves, aire comprimido y alcohol isopropílico. No usar objetos metálicos filosos o improvisados.",
      reason: "Las herramientas incorrectas pueden rayar circuitos, crear cortocircuitos o dañar componentes delicados."
    },
    {
      title: "Evitar tocar circuitos directamente con los dedos",
      description: "La grasa natural de las manos daña contactos eléctricos y componentes delicados.",
      reason: "Los aceites naturales de la piel interfieren con las conexiones eléctricas y pueden causar corrosión."
    },
    {
      title: "No realizar mantenimiento con el equipo encendido",
      description: "Cualquier limpieza, revisión interna o conexión debe hacerse con el dispositivo totalmente apagado.",
      reason: "Trabajar con el equipo encendido aumenta el riesgo de cortocircuitos y puede causar daños irreversibles."
    },
    {
      title: "Mantener cables ordenados para evitar tropiezos o tirones",
      description: "Un tirón accidental puede dañar puertos, cables y el equipo.",
      reason: "Los daños físicos en conectores y puertos son difíciles de reparar y pueden inutilizar componentes costosos."
    },
    {
      title: "No forzar piezas",
      description: "Si algo no encaja o no sale, revisar antes de aplicar fuerza. Podría romperse.",
      reason: "Forzar componentes puede quebrar conectores, plásticos o dañar los circuitos integrados."
    },
    {
      title: "Usar protección personal cuando sea necesario",
      description: "Guantes antiestáticos, lentes protectores y mascarilla si se usa aire comprimido (para polvo acumulado).",
      reason: "El polvo acumulado puede contener partículas nocivas y el aire comprimido puede dispersarlas en el ambiente."
    }
  ];

  return (
    <section id="normas-seguridad" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-3 text-xs">🛡️ Seguridad</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Normas de Seguridad
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            El cumplimiento de las normas de seguridad es fundamental para proteger tanto la integridad 
            física del técnico como la funcionalidad de los equipos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {normas.map((norma, index) => (
            <Card key={index} className="card-hover hover-lift shadow-card">
              <CardContent className="p-4">
                <div className="flex items-start gap-2.5 mb-2">
                  <div className="p-1.5 rounded-lg bg-primary/10 shrink-0">
                    <ShieldAlert className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1.5">{norma.title}</h3>
                    <p className="text-muted-foreground text-xs mb-1.5 leading-relaxed">{norma.description}</p>
                    <p className="text-xs text-primary/80 italic leading-relaxed">
                      <span className="font-semibold">Por qué:</span> {norma.reason}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NormasSeguridad;
