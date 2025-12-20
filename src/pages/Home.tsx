import { MenuCard } from "@/components/ui/MenuCard";
import { Title } from "@/components/features/Title";

export function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-12 mb-12 items-center">
      {/* Banner a ancho completo */}
      <img
        src="banner-simpson.jpeg"
        alt="Banner de Springfield"
        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
      />

      {/* Contenido con ancho limitado */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 md:mt-6">
        <Title titulo="Explora Springfield" subtitulo="" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 mx-4 sm:mx-6 mb-2 md:mb-6 lg:mx-auto max-w-4xl shadow-lg rounded-lg overflow-hidden">
        <img
          src="matt-groening-png.webp"
          alt="Creador de Los Simpson"
          className="w-full h-64 md:h-100 object-contain p-6 md:p-12 bg-gray-400 border-amber-400 border-4 md:border-8"
        />
        <div className="flex flex-col p-6 md:p-8 justify-center gap-3 md:gap-4">
          <h4 className="text-xs md:text-sm font-semibold text-yellow-400 flex items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
            CURIOSIDAD
          </h4>
          <h1 className="text-gray-900 font-bold text-xl md:text-2xl">Matt Groening</h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
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
