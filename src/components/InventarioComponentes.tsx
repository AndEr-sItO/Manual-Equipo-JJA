import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const InventarioComponentes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const inventario = [
    // Hardware Interno
    { id: "hw-01", nombre: "Gabinete Lenovo A54", categoria: "Hardware", descripcion: "Gabinete Lenovo modelo A54, código LKDNBRY", estado: "operativo" },
    { id: "hw-02", nombre: "Memoria RAM SAMSUNG", categoria: "Hardware", descripcion: "Memoria RAM SAMSUNG, velocidad 133MHz", estado: "operativo" },
    { id: "hw-03", nombre: "Disco Duro Seagate", categoria: "Hardware", descripcion: "Disco Duro Seagate modelo 3160815AS, código 5RA4JPNV, capacidad 149.1GB", estado: "operativo" },
    { id: "hw-04", nombre: "Tarjeta Madre Lenovo", categoria: "Hardware", descripcion: "Tarjeta Madre Lenovo modelo 8705A54", estado: "operativo" },
    { id: "hw-05", nombre: "Unidad CD/DVD Toshiba", categoria: "Hardware", descripcion: "Unidad CD/DVD Toshiba (TSST) modelo TS-H4a2C, código 41A9629, velocidad 48X", estado: "defectuoso" },
    { id: "hw-06", nombre: "Fuente de Poder LITEON", categoria: "Hardware", descripcion: "Fuente de Poder LITEON genérica, capacidad 225W", estado: "operativo" },
    { id: "hw-07", nombre: "Procesador Intel Pentium", categoria: "Hardware", descripcion: "Procesador Intel Pentium, velocidad 1.60GHz", estado: "operativo" },
    { id: "hw-08", nombre: "Puertos USB Intel", categoria: "Hardware", descripcion: "Puertos USB Intel ICH7", estado: "operativo" },
    { id: "hw-09", nombre: "Puertos PCI Intel", categoria: "Hardware", descripcion: "Puertos PCI Intel ICH7", estado: "operativo" },
    
    // Periféricos
    { id: "per-01", nombre: "Monitor Lenovo 9227-AD1", categoria: "Periférico", descripción: "Monitor Lenovo modelo 9227-AD1, código V1V5637", estado: "regular" },
    { id: "per-02", nombre: "Teclado Lenovo KU-0225", categoria: "Periférico", descripción: "Teclado Lenovo modelo KU-0225, código 0248795", estado: "operativo" },
    { id: "per-03", nombre: "Mouse Lenovo MO28U02", categoria: "Periférico", descripción: "Mouse Lenovo modelo MO28U02, código 44C0788018", estado: "operativo" },
    { id: "per-04", nombre: "Bocinas Lenovo LXB-1203A", categoria: "Periférico", descripción: "Bocinas Lenovo modelo LXB-1203A, código 070410", estado: "operativo" },
    
    // Software
    { id: "sw-01", nombre: "Linux Lite 3.8", categoria: "Software", descripción: "Sistema Operativo Linux Lite versión 3.8, licencia libre", estado: "operativo" },
    { id: "sw-02", nombre: "LibreOffice 5.1.6.2", categoria: "Software", descripción: "Suite Ofimática LibreOffice versión 5.1.6.2, licencia libre", estado: "operativo" },
    { id: "sw-03", nombre: "Gzip 1.6", categoria: "Software", descripción: "Compresor Gzip versión 1.6, licencia libre", estado: "operativo" },
    { id: "sw-04", nombre: "PDF Viewer 3.18.2", categoria: "Software", descripción: "Lector PDF Viewer versión 3.18.2, licencia libre", estado: "operativo" },
    { id: "sw-05", nombre: "Firefox 88.0", categoria: "Software", descripción: "Navegador Firefox versión 88.0, licencia libre", estado: "operativo" },
    { id: "sw-06", nombre: "VLC 2.2.2", categoria: "Software", descripción: "Reproductor VLC versión 2.2.2, licencia libre", estado: "operativo" },
  ];

  const getEstadoBadge = (estado: string) => {
    if (estado === "operativo") return <Badge className="bg-green-500">Operativo</Badge>;
    if (estado === "regular") return <Badge className="bg-yellow-500">Regular</Badge>;
    if (estado === "defectuoso") return <Badge className="bg-red-500">Defectuoso</Badge>;
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
    <section id="inventario" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Badge className="mb-3 text-xs">📋 Ficha Técnica</Badge>
          <h2 className="text-3xl font-bold mb-3">
            Inventario de Componentes
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
            Unidad Educativa Nacional "Vicente Emilio Sojo" - Equipo #19
          </p>

          {/* Leyenda */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-500 text-xs">Operativo</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500 text-xs">Regular</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-red-500 text-xs">Defectuoso</Badge>
            </div>
          </div>

          {/* Barra de búsqueda */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar componente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-10"
            />
          </div>
        </div>

        {/* Lista de Inventario */}
        <div className="space-y-3">
          {filterItems(inventario).map((item, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-[auto_auto_1fr_auto_2fr] gap-3 items-start">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Estado</p>
                    {getEstadoBadge(item.estado)}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">ID</p>
                    <p className="font-mono text-sm font-medium">{item.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Nombre</p>
                    <p className="font-medium text-sm">{item.nombre}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Categoría</p>
                    <Badge variant="secondary" className="text-xs">{item.categoria}</Badge>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Descripción</p>
                    <p className="text-sm text-muted-foreground">{item.descripcion}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filterItems(inventario).length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron componentes que coincidan con la búsqueda.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InventarioComponentes;
