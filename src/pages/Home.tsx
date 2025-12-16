import { MenuCard } from "@/components/ui/MenuCard";
import { Title } from "@/components/ui/Title";

export function Home() {
  return (
    <div className="flex flex-col gap-12 mb-12">
      {/* Banner a ancho completo */}
      <img
        src="banner-simpson.jpeg"
        alt="Banner de Springfield"
        className="w-full h-auto mb-8 object-cover"
      />

      {/* Contenido con ancho limitado */}
      <div className="max-w-7xl mx-auto p-6 mb-8">
        <Title titulo="Explora Springfield" subtitulo="" />
        <div className="grid grid-cols-3 gap-4">
          <MenuCard
            imagenSrc="personajes.webp"
            alt="Personajes de Los Simpson"
            title="Personajes"
            description="Conoce a Homero, Marge, Bart, Lisa, Maggie y a todos los vecinos excéntricos de Springfield."
            button="Ver todos"
            link="/characters"
          />
          <MenuCard
            imagenSrc="capitulos.jpg"
            alt="Capítulos de Los Simpson"
            title="Capítulos"
            description="Guía completa de todas las temporadas, especiales de Halloween y cortos exclusivos."
            button="Ver todos"
            link="/episodes"
          />
          <MenuCard
            imagenSrc="ubicaciones.jpg"
            alt="Ubicaciones de Los Simpson"
            title="Ubicaciones"
            description="Visita el Kwik-E-Mart, la Escuela Primaria, la Planta Nuclear y otros lugares icónicos."
            button="Ver todos"
            link="/locations"
          />
        </div>
      </div>

      {/* Tarjeta del creador */}
      <div className="max-w-4xl mx-auto mb-8 flex shadow-lg rounded-lg bg-white overflow-hidden">
        <img
          src="matt-groening-png.webp"
          alt="Creador de Los Simpson"
          className="w-64 h-auto object-cover p-12 bg-gray-400 border-amber-400 border-8"
        />
        <div className="flex flex-col p-8 justify-center gap-4 flex-1">
          <h4 className="text-sm font-semibold text-yellow-400 flex items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
            CURIOSIDAD
          </h4>
          <h1 className="text-gray-900 font-bold text-2xl">Matt Groening</h1>
          <p className="text-gray-500">
            Matt Groening creó a la familia Simpson en el vestíbulo de la
            oficina de James L. Brooks. Llamó a los personajes como los miembros
            de su propia familia, sustituyendo su propio nombre por Bart para
            mantener el anonimato.
          </p>
        </div>
      </div>
    </div>
  );
}
