import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";

const FallasComunes = () => {
  const fallasHardware = [
    {
      numero: 1,
      falla: "El computador no enciende",
      causas: "Cable desconectado, falla en fuente de poder, botón dañado",
      solucion: "Verificar cable y tomacorriente, probar otro cable, revisar interruptor posterior, si persiste → revisar fuente"
    },
    {
      numero: 2,
      falla: "No hay imagen en el monitor",
      causas: "Cable de video suelto, RAM mal conectada, monitor apagado",
      solucion: "Revisar y ajustar cables VGA/HDMI, probar otro monitor, retirar y colocar RAM nuevamente"
    },
    {
      numero: 3,
      falla: "Sobrecalentamiento",
      causas: "Ventiladores con polvo, mala ventilación, pasta térmica seca",
      solucion: "Limpiar ventiladores y rejillas, no bloquear salidas de aire, cambiar pasta térmica (solo técnicos)"
    },
    {
      numero: 4,
      falla: "Puertos USB no funcionan",
      causas: "Puerto dañado o sucio, cortocircuito, exceso de dispositivos",
      solucion: "Probar otro puerto, limpiar con aire comprimido, desconectar aparatos no necesarios"
    },
    {
      numero: 5,
      falla: "Teclado o mouse no responden",
      causas: "Cable dañado, puerto defectuoso, dispositivo averiado",
      solucion: "Cambiar puerto, probar con otro equipo, si es inalámbrico cambiar baterías"
    },
    {
      numero: 6,
      falla: "Disco duro no detectado",
      causas: "Cable SATA suelto, disco dañado, BIOS mal configurado",
      solucion: "Revisar cables de datos y energía, probar otro cable, entrar a BIOS y verificar detección"
    },
    {
      numero: 7,
      falla: "Ruidos extraños en el equipo",
      causas: "Ventiladores sucios o rozando, disco duro con fallos",
      solucion: "Limpiar ventiladores, ajustar cables que toquen aspas, respaldar datos si el ruido viene del disco"
    },
    {
      numero: 8,
      falla: "Pantalla con líneas o colores extraños",
      causas: "Cable dañado, tarjeta gráfica fallando, monitor defectuoso",
      solucion: "Probar otro cable o puerto, reiniciar PC, probar monitor diferente; si persiste revisar tarjeta gráfica"
    },
    {
      numero: 9,
      falla: "El PC se reinicia solo",
      causas: "Calentamiento, fuente dañada, RAM con errores",
      solucion: "Verificar temperatura, limpiar ventiladores, probar otra fuente, retirar y reinsertar módulos RAM"
    },
    {
      numero: 10,
      falla: "No detecta dispositivos (teclado, pendrive, mouse)",
      causas: "Conectores dañados, polvo, Tarjeta Madre con fallos",
      solucion: "Probar el dispositivo en otro PC, limpiar puerto, usar adaptador o cambiar puerto"
    }
  ];

  const fallasSoftware = [
    {
      numero: 1,
      falla: "El computador está muy lento",
      causas: "Muchos programas al inicio, poca RAM, archivos temporales",
      solucion: "Desinstalar programas no usados, limpiar con herramienta del sistema, desactivar apps de inicio"
    },
    {
      numero: 2,
      falla: "Programas se cierran solos",
      causas: "Archivos dañados, falta de memoria, versiones incompatibles",
      solucion: "Actualizar programa, cerrar apps en segundo plano, reinstalar el software"
    },
    {
      numero: 3,
      falla: "Virus o malware",
      causas: "Descargas inseguras, páginas web no confiables",
      solucion: "Analizar con antivirus/antimalware, eliminar amenazas, evitar descargas no seguras"
    },
    {
      numero: 4,
      falla: "No hay conexión a Internet",
      causas: "Configuración de red, drivers dañados, router fallando",
      solucion: "Reiniciar router, ejecutar solucionador de red, reinstalar driver de red"
    },
    {
      numero: 5,
      falla: "Pantalla azul (BSOD)",
      causas: "Drivers desactualizados, archivos de sistema corruptos, problemas de RAM",
      solucion: "Anotar código de error, actualizar drivers, ejecutar chkdsk y sfc /scannow, verificar RAM"
    },
    {
      numero: 6,
      falla: "Errores al instalar programas",
      causas: "Falta de espacio, permisos insuficientes, archivo descargado corrupto",
      solucion: "Liberar espacio en disco, ejecutar como Administrador, descargar nuevamente el instalador"
    },
    {
      numero: 7,
      falla: "Windows no arranca",
      causas: "Archivos del sistema corruptos, actualización fallida, disco con errores",
      solucion: "Modo seguro, restaurar sistema, usar herramientas de reparación, reinstalar Windows si es necesario"
    },
    {
      numero: 8,
      falla: "Programas o juegos no abren",
      causas: "Falta componente (.NET, Visual C++), incompatibilidad, antivirus bloqueando",
      solucion: "Instalar paquetes necesarios, verificar requisitos, desactivar temporalmente el antivirus"
    },
    {
      numero: 9,
      falla: "Archivos desaparecen o se corrompen",
      causas: "Virus, fallas del disco, cierre incorrecto del sistema",
      solucion: "Analizar con antivirus, verificar salud del disco con CrystalDiskInfo, evitar apagados forzados"
    },
    {
      numero: 10,
      falla: "El sistema no reconoce dispositivos USB",
      causas: "Drivers desactualizados, configuración de energía, conflictos de software",
      solucion: "Actualizar drivers USB, desactivar suspensión selectiva USB, desinstalar y reinstalar drivers"
    }
  ];

  return (
    <section id="fallas-comunes" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Badge className="mb-3 text-xs">⚠️ Solución de Problemas</Badge>
          <h2 className="text-3xl font-bold mb-3">Fallas Comunes</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Identificación y solución de los problemas más frecuentes en hardware y software
          </p>
        </div>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="hardware">🔧 Hardware</TabsTrigger>
            <TabsTrigger value="software">💾 Software</TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="space-y-4">
            {fallasHardware.map((falla) => (
              <Card key={falla.numero} className="card-hover">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-start gap-2">
                    <Badge variant="destructive" className="mt-0.5">{falla.numero}</Badge>
                    <span className="flex-1">{falla.falla}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                      <span className="font-semibold">Posibles Causas:</span>
                    </div>
                    <p className="text-muted-foreground pl-6">{falla.causas}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-green-600 dark:text-green-400">✓ Solución:</span>
                    </div>
                    <p className="text-muted-foreground pl-6">{falla.solucion}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="software" className="space-y-4">
            {fallasSoftware.map((falla) => (
              <Card key={falla.numero} className="card-hover">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-start gap-2">
                    <Badge variant="destructive" className="mt-0.5">{falla.numero}</Badge>
                    <span className="flex-1">{falla.falla}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                      <span className="font-semibold">Posibles Causas:</span>
                    </div>
                    <p className="text-muted-foreground pl-6">{falla.causas}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-green-600 dark:text-green-400">✓ Solución:</span>
                    </div>
                    <p className="text-muted-foreground pl-6">{falla.solucion}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FallasComunes;
