import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoVicenteSojo from "@/assets/comunidad/logo-vicente-sojo.jpg";
import logoCEN from "@/assets/comunidad/logo-cen.jpg";
import estructuraImg from "@/assets/comunidad/estructura.jpg";

const Comunidad = () => {
  return (
    <section id="comunidad" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-3 text-xs">🏫 Nosotros</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Nuestra Comunidad
          </h2>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logoVicenteSojo} alt="Logo UEN Vicente Emilio Sojo" className="max-w-xs w-full h-auto object-contain" />
        </div>

        {/* Descripción */}
        <Card className="mb-6 shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">📋 DESCRIPCIÓN</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-sm">
              La Unidad Educativa Nacional "Vicente Emilio Sojo" está ubicada en la urbanización La Mora, avenida 1 cruce con avenida 2, en La Victoria, estado Aragua. Es una institución pública perteneciente a la Parroquia Castor Nieves Ríos, orientada a la formación integral de adolescentes en el nivel de educación media diversificada. Su enfoque principal es brindar educación de calidad, preparándolos para su ingreso a la educación superior, destacando en especialidades como Ciencias. Su nombre rinde homenaje al músico venezolano Vicente Emilio Sojo, figura representativa del patrimonio cultural del país.
            </p>
          </CardContent>
        </Card>

        {/* Logo CEN */}
        <div className="flex justify-center mb-8">
          <img src={logoCEN} alt="Logo CEN 1987" className="max-w-[200px] w-full h-auto object-contain" />
        </div>

        {/* Reseña Histórica */}
        <Card className="mb-6 shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">📖 RESEÑA HISTÓRICA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground leading-relaxed text-sm">
              En septiembre de 1987 se crea la ESCUELA BÁSICA NACIONAL VICENTE EMILIO SOJO (III etapa), por decisión del Ministerio de Educación, en el marco de la conmemoración del centenario del Nacimiento de insigne músico venezolano Don Vicente Emilio Sojo, reconocido como "Maestro de Maestros". Siendo para ese entonces Jefe de la Zona Educativa del Estado Aragua la Profesora Ybelise Manzano de Parodi y como Jefe de personal el profesor Alcides Chirino.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              La escuela como tal inicia sus actividades administrativas, con la organización funcional e inscripción de estudiantes el 16 de septiembre y las pedagógicas el 1 de octubre de 1987 en el turno de la tarde en los espacios de la ya existente "E.B.N MIGUEL ANGEL ALVAREZ" del sector La Mora 1. Durante 4 años sobrevinieron conflictos en lo pedagógico y académico hasta que la docente Sub Directora Licenciada María Cardozo junto con representantes, estudiantes, obreros y docentes lograron conquistar un lote de terreno, donde construiría la planta física del liceo. Finalmente, en 1994, el Gobernador Carlos Talante funda el liceo. En consecuencia en diciembre de 1994 se muda la E.B.N. Vicente Emilio Sojo, al logro de su meta: su sede propia.
            </p>
          </CardContent>
        </Card>

        {/* Visión y Misión */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card card-hover">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                🎯 VISIÓN
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-sm">
                La U.E.N "Vicente Emilio Sojo" asume como visión institucional el llegar a ser una Institución educativa innovadora vinculada a la familia y a la comunidad que aporta a la sociedad un modelo de educación integral dirigido a las niñas, niños y adolescentes basada en el desarrollo ético, académico, tecnológico deportivo y socio-cultural de los mismos.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card card-hover">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                🎓 MISIÓN
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-sm">
                La U.E.N "Vicente Emilio Sojo" es una Institución pública, dedicada a la formación de niños, niñas y adolescentes sujetos de derecho y protagonistas activos de su propio aprendizaje, con el propósito fundamental de contribuir al pleno desarrollo de sus personalidades y su integración como ciudadanos y ciudadanas a una sociedad en constante evolución, desarrollando habilidades y conocimientos básicos para enfrentar la vida con conciencia crítica, constructiva y responsable en pro de la defensa y desarrollo de su dignidad, comprometidos con los valores éticos, morales, ciudadanos y de convivencia en paz Educando mediante un proceso de interacción entre la familia, escuela y la comunidad.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Comunidad;
