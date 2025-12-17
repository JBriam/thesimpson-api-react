import { CharactersApi } from "@/apis/CharactersApi";
import { CharactersCard } from "@/components/ui/CharactersCard";
import { Title } from "@/components/ui/Title";
import { useState, useEffect } from "react";
import type { Character } from "@/interfaces/Character";

export function Characters() {
  const [personajes, setPersonajes] = useState<Character[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch characters data from the API
  useEffect(() => {
    CharactersApi.fetchCharacters()
      .then((data) => {
        setPersonajes(data.results);
        setCargando(false);
      })
      .catch((error) => {
        setError(error.message);
        setCargando(false);
        console.error(error);
      });
  }, []);

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
          <p className="text-center text-xl text-red-600 mt-8">Error: {error}</p>
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
          <CharactersCard
            key={personaje.id}
            portrait_path={`https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`}
            alt={personaje.name}
            name={personaje.name}
            birthdate={personaje.birthdate}
            gender={personaje.gender}
            status={personaje.status}
            link={`/characters/${personaje.name
              .toLowerCase()
              .replace(/ /g, "-")}`}
          />
        ))}
      </div>
    </div>
  );
}
