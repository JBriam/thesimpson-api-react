import { EpisodesApi } from "@/apis/EpisodesApi";
import { EpisodesCard } from "@/components/ui/EpisodesCard";
import { Pagination } from "@/components/features/Pagination";
import { Title } from "@/components/features/Title";
import type { Episode } from "@/interfaces/Episode";
import { useState, useEffect } from "react";
import { SearchText } from "@/components/features/SearchText";

export function Episodes() {
  const [episodios, setEpisodios] = useState<Episode[]>([]);
  const [todosLosEpisodios, setTodosLosEpisodios] = useState<Episode[]>([]);
  const [cargando, setCargando] = useState(true);
  const [cargandoBusqueda, setCargandoBusqueda] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  // Estados para los filtros de búsqueda
  const [nombreFiltro, setNombreFiltro] = useState("");

  // Fetch characters data from the API
  useEffect(() => {
    EpisodesApi.fetchEpisodes(paginaActual)
      .then((data) => {
        setEpisodios(data.results);
        setTotalPaginas(data.pages);
        setCargando(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        setError(error.message);
        setCargando(false);
        console.error(error);
      });
  }, [paginaActual]);

  // Cargar todos los episodios cuando hay búsqueda por nombre
  useEffect(() => {
    const cargarTodosLosEpisodios = async () => {
      if (nombreFiltro === "") {
        return;
      }

      setCargandoBusqueda(true);
      try {
        const primeraPagina = await EpisodesApi.fetchEpisodes(1);
        const totalPags = primeraPagina.pages;

        // Cargar todos los episodios en paralelo
        const promesas = [];
        for (let i = 1; i <= totalPags; i++) {
          promesas.push(EpisodesApi.fetchEpisodes(i));
        }

        const resultados = await Promise.all(promesas);
        const todosEpisodios = resultados.flatMap((r) => r.results);
        setTodosLosEpisodios(todosEpisodios);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setCargandoBusqueda(false);
      }
    };

    cargarTodosLosEpisodios();
  }, [nombreFiltro]);

  // Función para resetear todos los filtros
  const handleResetFiltros = () => {
    setNombreFiltro("");
  };

  const handlePageChange = (nuevaPagina: number) => {
    setPaginaActual(nuevaPagina);
  };

  // Filtrar personajes según los criterios de búsqueda
  // Si hay búsqueda por nombre, usar todos los personajes; si no, usar solo la página actual
  const listaParaFiltrar =
    nombreFiltro !== "" && todosLosEpisodios.length > 0
      ? todosLosEpisodios
      : episodios;

  const episodiosFiltrados = listaParaFiltrar.filter((episodio) => {
    const cumpleNombre =
      nombreFiltro === "" ||
      episodio.name.toLowerCase().includes(nombreFiltro.toLowerCase());

    return cumpleNombre;
  });

  const estaCargando = cargando || cargandoBusqueda;

  if (estaCargando && episodios.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 my-4 sm:my-8">
        <Title
          titulo="Explora los Capítulos"
          subtitulo="Busca y descubre tus episodios favoritos de todas las temporadas. Desde los clásicos hasta los más recientes."
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
          titulo="Explora los Capítulos"
          subtitulo="Busca y descubre tus episodios favoritos de todas las temporadas. Desde los clásicos hasta los más recientes."
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
        titulo="Explora los Capítulos"
        subtitulo="Busca y descubre tus episodios favoritos de todas las temporadas. Desde los clásicos hasta los más recientes."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg shadow-md mb-6 sm:mb-8 overflow-hidden">
        <SearchText
          name={nombreFiltro}
          placeholder="Buscar episodio..."
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {episodiosFiltrados.map((episodio) => (
          <EpisodesCard key={episodio.id} episodio={episodio} />
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
