import { EpisodesApi } from "@/apis/EpisodesApi";
import { EpisodesCard } from "@/components/ui/EpisodesCard";
import { Pagination } from "@/components/features/Pagination";
import { Title } from "@/components/features/Title";
import type { Episode } from "@/interfaces/Episode";
import { useState, useEffect } from "react";

export function Episodes() {
  const [episodios, setEpisodios] = useState<Episode[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

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

  const handlePageChange = (nuevaPagina: number) => {
    setPaginaActual(nuevaPagina);
  };

  if (cargando) {
    return (
      <div className="max-w-7xl mx-auto p-6 m-8">
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
      <div className="max-w-7xl mx-auto p-6 m-8">
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
    <div className="max-w-7xl mx-auto p-6 m-8">
      <Title
        titulo="Explora los Capítulos"
        subtitulo="Busca y descubre tus episodios favoritos de todas las temporadas. Desde los clásicos hasta los más recientes."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {episodios.map((episodio) => (
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
