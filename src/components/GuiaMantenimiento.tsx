import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import inspeccionVisual from "@/assets/mantenimiento/desconectar-equipo.jpg";
import limpiezaExterna from "@/assets/mantenimiento/pulsera-antiestatica-uso.jpg";
import limpiezaInterna from "@/assets/mantenimiento/limpieza-interna.jpg";
import revisionComponentes from "@/assets/mantenimiento/revision-componentes.jpg";
import optimizacionSistema from "@/assets/mantenimiento/optimizacion-sistema.jpg";
import pruebasFuncionamiento from "@/assets/mantenimiento/pruebas-funcionamiento.jpg";
import diagnosticoProblema from "@/assets/mantenimiento/diagnostico-problema.jpg";
import comprobacionHardware from "@/assets/mantenimiento/comprobacion-hardware.jpg";
import revisionSoftware from "@/assets/mantenimiento/revision-software.jpg";
import correccionAplicada from "@/assets/mantenimiento/correccion-aplicada.jpg";

const GuiaMantenimiento = () => {
  const pasosPreventivo = [
    {
      title: "Inspección Visual del Equipo",
      description: "• Revisar el estado físico del gabinete, conexiones, cables y puertos USB.\n• Confirmar que no falten tornillos o tapas.",
      image: inspeccionVisual
    },
    {
      title: "Limpieza Externa",
      description: "• Pasar un paño de microfibra por el monitor, teclado y mouse.\n• Evitar líquidos directamente sobre el equipo.",
      image: limpiezaExterna
    },
    {
      title: "Limpieza Interna",
      description: "(Se debe realizar con aire comprimido, brochas, equipo apagado y desconectado)\n• Quitar polvo del ventilador, fuente de poder y disipador.\n• Verificar correcto flujo de aire.",
      image: limpiezaInterna
    },
    {
      title: "Revisión de Componentes Internos",
      description: "• Confirmar que RAM, cables SATA y tarjetas estén bien conectadas.\n• Revisar estado del disco (sin ruidos extraños o sectores dañados).",
      image: revisionComponentes
    },
    {
      title: "Optimización del Sistema",
      description: "• Eliminar archivos temporales y programas innecesarios.\n• Actualizar sistema operativo y controladores.\n• Ejecutar antivirus o antimalware.",
      image: optimizacionSistema
    },
    {
      title: "Pruebas de Funcionamiento",
      description: "• Encender el equipo y comprobar sonido, cámara, USB, internet, programas básicos.",
      image: pruebasFuncionamiento
    }
  ];

  const pasosCorrectivo = [
    {
      title: "Diagnóstico del Problema",
      description: "• Preguntar qué falló y cuándo ocurrió.\n• Identificar si el fallo es de hardware o software.",
      image: diagnosticoProblema
    },
    {
      title: "Comprobación del Hardware",
      description: "• Probar fuente de poder, RAM, cables, disco duro y periféricos.\n• Reemplazar la pieza dañada si es necesario.",
      image: comprobacionHardware
    },
    {
      title: "Revisión de Software",
      description: "• Analizar virus o archivos corruptos.\n• Reparar sistema operativo, controladores o archivos dañados.\n• Si es necesario, formatear y reinstalar el sistema.",
      image: revisionSoftware
    },
    {
      title: "Corrección Aplicada",
      description: "• Registrar qué se cambió o reparó.\n• Etiquetar piezas reemplazadas con fecha.",
      image: correccionAplicada
    },
    {
      title: "Pruebas Finales",
      description: "• Verificar que la solución funciona.\n• Probar rendimiento, conexión, audio, video, programas y puertos.",
      image: pruebasFuncionamiento
    }
  ];

  return (
    <section id="guia-mantenimiento" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm">Procedimientos</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Guía para mantenimiento
          </h2>
        </div>

        {/* Mantenimiento Preventivo */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Mantenimiento Preventivo para Computadoras</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-xl">✅ Objetivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Mantener el equipo limpio, organizado y funcionando correctamente para evitar fallas futuras.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-xl">📅 Frecuencia Recomendada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Realizar cada 3 a 6 meses.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h4 className="text-2xl font-bold mb-6">🔧 Pasos del Mantenimiento Preventivo</h4>
          </div>

          <div className="grid gap-6">
            {pasosPreventivo.map((paso, index) => (
              <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 flex flex-col justify-center">
                    <h4 className="text-xl font-bold mb-3">{index + 1}. {paso.title}</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{paso.description}</p>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={paso.image} 
                      alt={paso.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mantenimiento Correctivo */}
        <div>
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Mantenimiento Correctivo para Computadoras</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-xl">🎯 Objetivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Solucionar fallas o problemas que impiden el funcionamiento normal del equipo.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-xl">📍 Se realiza cuando el equipo presenta fallas, como:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>No enciende</li>
                    <li>Se reinicia solo</li>
                    <li>Va muy lento</li>
                    <li>Pantalla sin señal</li>
                    <li>No reconoce dispositivos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h4 className="text-2xl font-bold mb-6">🔍 Pasos del Mantenimiento Correctivo</h4>
          </div>

          <div className="grid gap-6">
            {pasosCorrectivo.map((paso, index) => (
              <Card key={index} className="card-hover hover-lift shadow-card overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 flex flex-col justify-center">
                    <h4 className="text-xl font-bold mb-3">{index + 1}. {paso.title}</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{paso.description}</p>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={paso.image} 
                      alt={paso.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuiaMantenimiento;
