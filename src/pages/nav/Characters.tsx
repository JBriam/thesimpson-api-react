import { CharactersApi } from "@/apis/CharactersApi";
import { CharactersCard } from "@/components/ui/CharactersCard";
import { Title } from "@/components/ui/Title";
import { useState, useEffect } from "react";
import type { Character } from "@/interfaces/Character";
import { Pagination } from "@/components/ui/Pagination";

export function Characters() {
  const [personajes, setPersonajes] = useState<Character[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  // Fetch characters data from the API
  useEffect(() => {
    CharactersApi.fetchCharacters(paginaActual)
      .then((data) => {
        setPersonajes(data.results);
        setTotalPaginas(data.pages);
        setCargando(false);
        // Hacer scroll hacia arriba cuando cambia la página
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
          titulo="Personajes de Springfield"
          subtitulo="Explora el elenco completo de tu serie favorita"
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
          titulo="Personajes de Springfield"
          subtitulo="Explora el elenco completo de tu serie favorita"
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
        titulo="Personajes de Springfield"
        subtitulo="Explora el elenco completo de tu serie favorita"
      />
      <div className="grid grid-cols-4 gap-8">
        {personajes.map((personaje) => (
          <CharactersCard key={personaje.id} personaje={personaje} />
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
