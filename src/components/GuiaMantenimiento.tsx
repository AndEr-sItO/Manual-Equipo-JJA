import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import inspeccionVisual from "@/assets/mantenimiento/inspeccion-visual.jpg";
import desconectarEquipo from "@/assets/mantenimiento/desconectar-equipo.jpg";
import limpiezaInterna from "@/assets/mantenimiento/limpieza-interna-nueva.jpg";
import revisionComponentes from "@/assets/mantenimiento/revision-componentes-nueva.jpg";
import optimizacionSistema from "@/assets/mantenimiento/optimizacion-sistema-nueva.jpg";
import pruebasFuncionamiento from "@/assets/mantenimiento/pruebas-funcionamiento-nueva.jpg";
import diagnosticoProblema from "@/assets/mantenimiento/diagnostico-problema-nuevo.jpg";
import comprobacionHardware from "@/assets/mantenimiento/comprobacion-hardware-nueva.jpg";
import revisionSoftware from "@/assets/mantenimiento/revision-software-nueva.jpg";
import correccionAplicada from "@/assets/mantenimiento/correccion-aplicada-nueva.jpg";
import pruebasFinales from "@/assets/mantenimiento/pruebas-finales.jpg";

const GuiaMantenimiento = () => {
  const pasosPreventivo = [
    {
      numero: "1",
      title: "Inspección Visual del Equipo",
      description: "Revisar el estado físico del gabinete, conexiones, cables y puertos USB. Confirmar que no falten tornillos o tapas.",
      image: inspeccionVisual,
    },
    {
      numero: "2",
      title: "Limpieza Externa",
      description: "Pasar un paño de microfibra por el monitor, teclado y mouse. Evitar líquidos directamente sobre el equipo.",
      image: desconectarEquipo,
    },
    {
      numero: "3",
      title: "Limpieza Interna",
      description: "Se debe realizar con aire comprimido, brochas, equipo apagado y desconectado. Quitar polvo del ventilador, fuente de poder y disipador. Verificar correcto flujo de aire.",
      image: limpiezaInterna,
    },
    {
      numero: "4",
      title: "Revisión de Componentes Internos",
      description: "Confirmar que RAM, cables SATA y tarjetas estén bien conectadas. Revisar estado del disco (sin ruidos extraños o sectores dañados).",
      image: revisionComponentes,
    },
    {
      numero: "5",
      title: "Optimización del Sistema",
      description: "Eliminar archivos temporales y programas innecesarios. Actualizar sistema operativo y controladores. Ejecutar antivirus o antimalware.",
      image: optimizacionSistema,
    },
    {
      numero: "6",
      title: "Pruebas de Funcionamiento",
      description: "Encender el equipo y comprobar sonido, cámara, USB, internet y programas básicos.",
      image: pruebasFuncionamiento,
    },
  ];

  const pasosCorrectivo = [
    {
      numero: "1",
      title: "Diagnóstico del Problema",
      description: "Preguntar qué falló y cuándo ocurrió. Identificar si el fallo es de hardware o software.",
      image: diagnosticoProblema,
    },
    {
      numero: "2",
      title: "Comprobación del Hardware",
      description: "Probar fuente de poder, RAM, cables, disco duro y periféricos. Reemplazar la pieza dañada si es necesario.",
      image: comprobacionHardware,
    },
    {
      numero: "3",
      title: "Revisión de Software",
      description: "Analizar virus o archivos corruptos. Reparar sistema operativo, controladores o archivos dañados. Si es necesario, formatear y reinstalar el sistema.",
      image: revisionSoftware,
    },
    {
      numero: "4",
      title: "Corrección Aplicada",
      description: "Registrar qué se cambió o reparó. Etiquetar piezas reemplazadas con fecha.",
      image: correccionAplicada,
    },
    {
      numero: "5",
      title: "Pruebas Finales",
      description: "Verificar que la solución funciona. Probar rendimiento, conexión, audio, video, programas y puertos.",
      image: pruebasFinales,
    },
  ];

  return (
    <section id="guia-mantenimiento" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-3 text-xs">🔧 Procedimientos</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Guía para el Mantenimiento
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Procedimientos paso a paso para mantener tu equipo en óptimas condiciones
          </p>
        </div>

        <Tabs defaultValue="preventivo" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="preventivo" className="text-sm">Preventivo</TabsTrigger>
            <TabsTrigger value="correctivo" className="text-sm">Correctivo</TabsTrigger>
          </TabsList>

          <TabsContent value="preventivo">
            <Card className="mb-6 shadow-card">
              <CardContent className="pt-5 pb-5">
                <div className="mb-5">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    ✅ Objetivo
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Mantener el equipo limpio, organizado y funcionando correctamente para evitar fallas futuras.
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    📅 Frecuencia
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Realizar cada 3 a 6 meses.
                  </p>
                </div>
                <h3 className="text-lg font-bold mb-4">🔧 Pasos del Mantenimiento</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {pasosPreventivo.map((paso, index) => (
                    <Card key={index} className="overflow-hidden card-hover">
                      <div className="relative h-36">
                        <img
                          src={paso.image}
                          alt={paso.title}
                          className="w-full h-full object-contain bg-muted"
                        />
                        <div className="absolute top-2 left-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          {paso.numero}
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm mb-1.5">{paso.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{paso.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="correctivo">
            <Card className="mb-6 shadow-card">
              <CardContent className="pt-5 pb-5">
                <div className="mb-5">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    🎯 Objetivo
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Solucionar fallas o problemas que impiden el funcionamiento normal del equipo.
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    📍 Situaciones
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>No enciende</li>
                    <li>Se reinicia solo</li>
                    <li>Va muy lento</li>
                    <li>Pantalla sin señal</li>
                    <li>No reconoce dispositivos</li>
                  </ul>
                </div>
                <h3 className="text-lg font-bold mb-4">🔍 Pasos del Mantenimiento</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {pasosCorrectivo.map((paso, index) => (
                    <Card key={index} className="overflow-hidden card-hover">
                      <div className="relative h-36">
                        <img
                          src={paso.image}
                          alt={paso.title}
                          className="w-full h-full object-contain bg-muted"
                        />
                        <div className="absolute top-2 left-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          {paso.numero}
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm mb-1.5">{paso.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{paso.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default GuiaMantenimiento;
