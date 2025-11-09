import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoVicenteSojo from "@/assets/comunidad/logo-vicente-sojo.jpg";
import logoCEN from "@/assets/comunidad/logo-cen.jpg";
import estructuraImg from "@/assets/comunidad/estructura.jpg";

const Comunidad = () => {
  return (
    <section id="comunidad" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm">Nosotros</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Nuestra Comunidad
          </h2>
        </div>

        {/* Logo y Bienvenida */}
        <div className="flex justify-center mb-12">
          <img src={logoVicenteSojo} alt="Logo UEN Vicente Emilio Sojo" className="max-w-md w-full rounded-lg shadow-card" />
        </div>

        {/* Descripción */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-3xl">DESCRIPCIÓN</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-lg">
              La Unidad Educativa Nacional "Vicente Emilio Sojo" está ubicada en la urbanización La Mora, avenida 1 cruce con avenida 2, en La Victoria, estado Aragua. Es una institución pública perteneciente a la Parroquia Castor Nieves Ríos, orientada a la formación integral de adolescentes en el nivel de educación media diversificada. Su enfoque principal es brindar educación de calidad, preparándolos para su ingreso a la educación superior, destacando en especialidades como Ciencias. Su nombre rinde homenaje al músico venezolano Vicente Emilio Sojo, figura representativa del patrimonio cultural del país.
            </p>
          </CardContent>
        </Card>

        {/* Logo CEN */}
        <div className="flex justify-center mb-12">
          <img src={logoCEN} alt="Logo CEN 1987" className="max-w-xs w-full" />
        </div>

        {/* Reseña Histórica */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-3xl">RESEÑA HISTÓRICA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              En septiembre de 1987 se crea la ESCUELA BÁSICA NACIONAL VICENTE EMILIO SOJO (III etapa), por decisión del Ministerio de Educación, en el marco de la conmemoración del centenario del Nacimiento de insigne músico venezolano Don Vicente Emilio Sojo, reconocido como "Maestro de Maestros". Siendo para ese entonces Jefe de la Zona Educativa del Estado Aragua la Profesora Ybelise Manzano de Parodi y como Jefe de personal el profesor Alcides Chirino.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              La escuela como tal inicia sus actividades administrativas, con la organización funcional e inscripción de estudiantes el 16 de septiembre y las pedagógicas el 1 de octubre de 1987 en el turno de la tarde en los espacios de la ya existente "E.B.N MIGUEL ANGEL ALVAREZ" del sector La Mora 1. Durante 4 años sobrevinieron conflictos en lo pedagógico y académico hasta que la docente Sub Directora Licenciada María Cardozo junto con representantes, estudiantes, obreros y docentes lograron conquistar un lote de terreno, donde construiría la planta física del liceo. Finalmente, en 1994, el Gobernador Carlos Talante funda el liceo. En consecuencia en diciembre de 1994 se muda la E.B.N. Vicente Emilio Sojo, al logro de su meta: su sede propia.
            </p>
          </CardContent>
        </Card>

        {/* Visión y Misión */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-card card-hover">
            <CardHeader>
              <CardTitle className="text-2xl">VISIÓN</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                La U.E.N "Vicente Emilio Sojo" asume como visión institucional el llegar a ser una Institución educativa innovadora vinculada a la familia y a la comunidad que aporta a la sociedad un modelo de educación integral dirigido a las niñas, niños y adolescentes basada en el desarrollo ético, académico, tecnológico deportivo y socio-cultural de los mismos.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card card-hover">
            <CardHeader>
              <CardTitle className="text-2xl">MISIÓN</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                La U.E.N "Vicente Emilio Sojo" es una Institución pública, dedicada a la formación de niños, niñas y adolescentes sujetos de derecho y protagonistas activos de su propio aprendizaje, con el propósito fundamental de contribuir al pleno desarrollo de sus personalidades y su integración como ciudadanos y ciudadanas a una sociedad en constante evolución, desarrollando habilidades y conocimientos básicos para enfrentar la vida con conciencia crítica, constructiva y responsable en pro de la defensa y desarrollo de su dignidad, comprometidos con los valores éticos, morales, ciudadanos y de convivencia en paz Educando mediante un proceso de interacción entre la familia, escuela y la comunidad.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Estructura Organizativa */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-3xl">ESTRUCTURA ORGANIZATIVA</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={estructuraImg} alt="Estructura Organizativa" className="w-full rounded-lg mb-6" />
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Directora:</span>
                <span className="text-muted-foreground">María teresa Díaz</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Coordinación y evaluación de estudio:</span>
                <span className="text-muted-foreground">Profa. Fabiola Jagrutta / Profa. Marieng Herrera</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Coordinación No2:</span>
                <span className="text-muted-foreground">Profa. Ana Pérez</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Coordinación No3:</span>
                <span className="text-muted-foreground">Profa. Yuleidy romero</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Comunidad;
