import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const InventarioComponentes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const hardwareInternos = [
    { nombre: "GABINETE", marca: "Lenovo", modelo: "A54", ref: "LKDNBRY", velocidad: "N.A", capacidad: "N.A", estado: "B" },
    { nombre: "MEMORIA RAM 1", marca: "SAMSUNG", modelo: "N.A", ref: "N.A", velocidad: "133Mhz", capacidad: "N.A", estado: "B" },
    { nombre: "MEMORIA RAM 2", marca: "N.A", modelo: "N.A", ref: "N.A", velocidad: "N.A", capacidad: "N.A", estado: "N.A" },
    { nombre: "DISCO DURO 1", marca: "Seagate", modelo: "3160815AS", ref: "5RA4JPNV", velocidad: "N.A", capacidad: "149,1GB", estado: "B" },
    { nombre: "DISCO DURO 2", marca: "N.A", modelo: "N.A", ref: "N.A", velocidad: "N.A", capacidad: "N.A", estado: "N.A" },
    { nombre: "TARJETA MADRE", marca: "Lenovo", modelo: "8705A54", ref: "N.A", velocidad: "N.A", capacidad: "N.A", estado: "B" },
    { nombre: "UNIDAD DE CD/DVD", marca: "Toshiba (TSST)", modelo: "TS-H4a2C", ref: "41A9629", velocidad: "48X", capacidad: "N.A", estado: "M" },
    { nombre: "FUENTE DE PODER", marca: "LITEON", modelo: "Genérica", ref: "N.A", velocidad: "N.A", capacidad: "225W", estado: "B" },
    { nombre: "PROCESADOR", marca: "Intel", modelo: "Pentium", ref: "N.A", velocidad: "1.60 Ghz", capacidad: "N.A", estado: "B" },
    { nombre: "PUERTOS USB", marca: "Intel", modelo: "ICH7", ref: "N.A", velocidad: "N.A", capacidad: "N.A", estado: "B" },
    { nombre: "PUERTOS PCI", marca: "Intel", modelo: "ICH7", ref: "N.A", velocidad: "N.A", capacidad: "N.A", estado: "B" },
  ];

  const perifericos = [
    { nombre: "MONITOR", marca: "Lenovo", modelo: "9227-AD1", ref: "V1V5637", estado: "R" },
    { nombre: "TECLADO", marca: "Lenovo", modelo: "KU-0225", ref: "0248795", estado: "B" },
    { nombre: "MOUSE", marca: "Lenovo", modelo: "MO28U02", ref: "44C0788018", estado: "B" },
    { nombre: "IMPRESORA", marca: "N.A", modelo: "N.A", ref: "N.A", estado: "N.A" },
    { nombre: "ESCÁNER", marca: "N.A", modelo: "N.A", ref: "N.A", estado: "N.A" },
    { nombre: "OTROS", marca: "Lenovo", modelo: "LXB-1203A", ref: "070410", estado: "B" },
  ];

  const software = [
    { nombre: "SISTEMA OPERATIVO", programa: "Linux Lite", version: "3.8", licencia: "Libre", actualizaciones: "N.A" },
    { nombre: "SISTEMA OFIMÁTICO", programa: "LibreOffice", version: "5.1.6.2", licencia: "Libre", actualizaciones: "N.A" },
    { nombre: "COMPRESOR", programa: "Gzip", version: "1.6", licencia: "Libre", actualizaciones: "N.A" },
    { nombre: "ADOBE READER", programa: "PDF Viewer", version: "3.18.2", licencia: "Libre", actualizaciones: "N.A" },
    { nombre: "NAVEGADOR", programa: "Firefox", version: "88.0", licencia: "Libre", actualizaciones: "N.A" },
    { nombre: "REPRODUCTOR", programa: "VLC", version: "2.2.2", licencia: "Libre", actualizaciones: "N.A" },
  ];

  const getEstadoBadge = (estado: string) => {
    if (estado === "B") return <Badge className="bg-green-500">Bueno</Badge>;
    if (estado === "R") return <Badge className="bg-yellow-500">Regular</Badge>;
    if (estado === "M") return <Badge className="bg-red-500">Malo</Badge>;
    return <Badge variant="secondary">N.A</Badge>;
  };

  const filterItems = (items: any[]) => {
    return items.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <section id="inventario" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm">Ficha Técnica</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Inventario de Componentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Unidad Educativa Nacional "Vicente Emilio Sojo" - Equipo #19
          </p>

          {/* Leyenda */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-500">B</Badge>
              <span className="text-sm text-muted-foreground">Bueno</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500">R</Badge>
              <span className="text-sm text-muted-foreground">Regular</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-red-500">M</Badge>
              <span className="text-sm text-muted-foreground">Malo</span>
            </div>
          </div>

          {/* Barra de búsqueda */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar componente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Hardware Internos */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Hardware (Componentes Internos)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Componente</TableHead>
                    <TableHead>Marca</TableHead>
                    <TableHead>Modelo</TableHead>
                    <TableHead>Ref/Código/Serial</TableHead>
                    <TableHead>Velocidad</TableHead>
                    <TableHead>Capacidad</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filterItems(hardwareInternos).map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.nombre}</TableCell>
                      <TableCell>{item.marca}</TableCell>
                      <TableCell>{item.modelo}</TableCell>
                      <TableCell>{item.ref}</TableCell>
                      <TableCell>{item.velocidad}</TableCell>
                      <TableCell>{item.capacidad}</TableCell>
                      <TableCell>{getEstadoBadge(item.estado)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Periféricos */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Hardware (Periféricos)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Periférico</TableHead>
                    <TableHead>Marca</TableHead>
                    <TableHead>Modelo</TableHead>
                    <TableHead>Ref/Código/Serial</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filterItems(perifericos).map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.nombre}</TableCell>
                      <TableCell>{item.marca}</TableCell>
                      <TableCell>{item.modelo}</TableCell>
                      <TableCell>{item.ref}</TableCell>
                      <TableCell>{getEstadoBadge(item.estado)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Software */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Software</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Programa</TableHead>
                    <TableHead>Versión</TableHead>
                    <TableHead>Licencia</TableHead>
                    <TableHead>Actualizaciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filterItems(software).map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.nombre}</TableCell>
                      <TableCell>{item.programa}</TableCell>
                      <TableCell>{item.version}</TableCell>
                      <TableCell>{item.licencia}</TableCell>
                      <TableCell>{item.actualizaciones}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InventarioComponentes;
