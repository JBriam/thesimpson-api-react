import { Title } from "@/components/features/Title";
import { LocationsApi } from "@/apis/LocationsApi";
import { LocationsCard } from "@/components/ui/LocationsCard";
import type { Location } from "@/interfaces/Location";
import { useState, useEffect } from "react";
import { Pagination } from "@/components/features/Pagination";
import { SearchText } from "@/components/features/SearchText";

export function Locations() {
  const [ubicaciones, setUbicaciones] = useState<Location[]>([]);
  const [todosLasUbicaciones, setTodosLasUbicaciones] = useState<Location[]>(
    []
  );
  const [cargando, setCargando] = useState(true);
  const [cargandoBusqueda, setCargandoBusqueda] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  // Estados para los filtros de búsqueda
  const [nombreFiltro, setNombreFiltro] = useState("");

  // Fetch locations data from the API
  useEffect(() => {
    LocationsApi.fetchLocations(paginaActual)
      .then((data) => {
        setUbicaciones(data.results);
        setTotalPaginas(data.pages);
        setCargando(false);
      })
      .catch((error) => {
        setError(error.message);
        setCargando(false);
        console.error(error);
      });
  }, [paginaActual]);

  // Cargar todas las ubicaciones cuando hay búsqueda por nombre
  useEffect(() => {
    const cargarTodasLasUbicaciones = async () => {
      if (nombreFiltro === "") {
        return;
      }

      setCargandoBusqueda(true);
      try {
        const primeraPagina = await LocationsApi.fetchLocations(1);
        const totalPags = primeraPagina.pages;

        // Cargar todas las ubicaciones en paralelo
        const promesas = [];
        for (let i = 1; i <= totalPags; i++) {
          promesas.push(LocationsApi.fetchLocations(i));
        }

        const resultados = await Promise.all(promesas);
        const todasLasUbicaciones = resultados.flatMap((r) => r.results);
        setTodosLasUbicaciones(todasLasUbicaciones);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setCargandoBusqueda(false);
      }
    };

    cargarTodasLasUbicaciones();
  }, [nombreFiltro]);

  // Función para resetear todos los filtros
  const handleResetFiltros = () => {
    setNombreFiltro("");
  };

  const handlePageChange = (nuevaPagina: number) => {
    setPaginaActual(nuevaPagina);
  };

  // Filtrar ubicaciones según los criterios de búsqueda
  // Si hay búsqueda por nombre, usar todas las ubicaciones; si no, usar solo la página actual
  const listaParaFiltrar =
    nombreFiltro !== "" && todosLasUbicaciones.length > 0
      ? todosLasUbicaciones
      : ubicaciones;

  const ubicacionesFiltradas = listaParaFiltrar.filter((ubicacion) => {
    const cumpleNombre =
      nombreFiltro === "" ||
      ubicacion.name.toLowerCase().includes(nombreFiltro.toLowerCase());

    return cumpleNombre;
  });

  const estaCargando = cargando || cargandoBusqueda;

  if (estaCargando && ubicaciones.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 my-4 sm:my-8">
        <Title
          titulo="Explora los rincones de Springfield"
          subtitulo="Descubre dónde ocurren las historias de tus personajes favoritos."
        />
        <div className="min-h-50 flex items-center justify-center">
          <span className="w-12 h-12 rounded-[50%] inline-block border-t-[3px] border-solid border-transparent border-t-yellow-500 animate-spin"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 my-4 sm:my-8">
        <Title
          titulo="Explora los rincones de Springfield"
          subtitulo="Descubre dónde ocurren las historias de tus personajes favoritos."
        />
        <div className="min-h-50 flex items-center justify-center">
          <p className="text-center text-xl text-red-600 mt-8">
            Error: {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 my-4 sm:my-8">
      <Title
        titulo="Explora los rincones de Springfield"
        subtitulo="Descubre dónde ocurren las historias de tus personajes favoritos."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg shadow-md mb-6 sm:mb-8 overflow-hidden">
        <SearchText
          name={nombreFiltro}
          placeholder="Buscar ubicación..."
          onNameChange={setNombreFiltro}
        />
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-1.5 sm:gap-2 col-span-full md:col-span-1 min-w-0">
          <button
            onClick={handleResetFiltros}
            className="px-3 sm:px-4 h-9 sm:h-10 rounded-full border border-gray-200 cursor-pointer bg-white hover:bg-orange-50 hover:border-orange-300 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all shadow-sm flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium whitespace-nowrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            Todos
          </button>
        </div>
      </div>
      {cargandoBusqueda && (
        <div className="flex justify-center py-4">
          <span className="w-8 h-8 rounded-[50%] inline-block border-t-[3px] border-solid border-transparent border-t-yellow-500 animate-spin"></span>
          <span className="ml-3 text-gray-600">
            Buscando en todas las páginas...
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 items-start">
        {ubicacionesFiltradas.map((ubicacion) => (
          <LocationsCard key={ubicacion.id} ubicacion={ubicacion} />
        ))}
      </div>
      <Pagination
        currentPage={paginaActual}
        totalPages={totalPaginas}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
