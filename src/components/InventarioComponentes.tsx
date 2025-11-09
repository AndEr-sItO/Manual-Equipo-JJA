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

  const inventario = [
    // Hardware Interno
    { id: "hw-01", nombre: "GABINETE", categoria: "Hardware Interno", descripcion: "Lenovo A54 | Ref: LKDNBRY", estado: "B" },
    { id: "hw-02", nombre: "MEMORIA RAM 1", categoria: "Hardware Interno", descripcion: "SAMSUNG | 133Mhz", estado: "B" },
    { id: "hw-03", nombre: "DISCO DURO 1", categoria: "Hardware Interno", descripcion: "Seagate 3160815AS | Ref: 5RA4JPNV | Capacidad: 149,1GB", estado: "B" },
    { id: "hw-04", nombre: "TARJETA MADRE", categoria: "Hardware Interno", descripcion: "Lenovo 8705A54", estado: "B" },
    { id: "hw-05", nombre: "UNIDAD DE CD/DVD", categoria: "Hardware Interno", descripcion: "Toshiba (TSST) TS-H4a2C | Ref: 41A9629 | Velocidad: 48X", estado: "M" },
    { id: "hw-06", nombre: "FUENTE DE PODER", categoria: "Hardware Interno", descripcion: "LITEON Genérica | Capacidad: 225W", estado: "B" },
    { id: "hw-07", nombre: "PROCESADOR", categoria: "Hardware Interno", descripcion: "Intel Pentium | Velocidad: 1.60 Ghz", estado: "B" },
    { id: "hw-08", nombre: "PUERTOS USB", categoria: "Hardware Interno", descripcion: "Intel ICH7", estado: "B" },
    { id: "hw-09", nombre: "PUERTOS PCI", categoria: "Hardware Interno", descripcion: "Intel ICH7", estado: "B" },
    
    // Periféricos
    { id: "per-01", nombre: "MONITOR", categoria: "Periférico", descripcion: "Lenovo 9227-AD1 | Ref: V1V5637", estado: "R" },
    { id: "per-02", nombre: "TECLADO", categoria: "Periférico", descripcion: "Lenovo KU-0225 | Ref: 0248795", estado: "B" },
    { id: "per-03", nombre: "MOUSE", categoria: "Periférico", descripcion: "Lenovo MO28U02 | Ref: 44C0788018", estado: "B" },
    { id: "per-04", nombre: "OTROS", categoria: "Periférico", descripcion: "Lenovo LXB-1203A | Ref: 070410", estado: "B" },
    
    // Software
    { id: "sw-01", nombre: "SISTEMA OPERATIVO", categoria: "Software", descripcion: "Linux Lite 3.8 | Licencia: Libre", estado: "B" },
    { id: "sw-02", nombre: "SISTEMA OFIMÁTICO", categoria: "Software", descripcion: "LibreOffice 5.1.6.2 | Licencia: Libre", estado: "B" },
    { id: "sw-03", nombre: "COMPRESOR", categoria: "Software", descripcion: "Gzip 1.6 | Licencia: Libre", estado: "B" },
    { id: "sw-04", nombre: "ADOBE READER", categoria: "Software", descripcion: "PDF Viewer 3.18.2 | Licencia: Libre", estado: "B" },
    { id: "sw-05", nombre: "NAVEGADOR", categoria: "Software", descripcion: "Firefox 88.0 | Licencia: Libre", estado: "B" },
    { id: "sw-06", nombre: "REPRODUCTOR", categoria: "Software", descripcion: "VLC 2.2.2 | Licencia: Libre", estado: "B" },
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

        {/* Inventario Completo */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Inventario Completo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Estado</TableHead>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead>Descripción</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filterItems(inventario).map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{getEstadoBadge(item.estado)}</TableCell>
                      <TableCell className="font-mono text-sm">{item.id}</TableCell>
                      <TableCell className="font-medium">{item.nombre}</TableCell>
                      <TableCell>{item.categoria}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{item.descripcion}</TableCell>
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
