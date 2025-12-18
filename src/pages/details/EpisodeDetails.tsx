import { useEffect, useState } from "react";
import { CharactersApi } from "@/apis/CharactersApi";
import { Title } from "@/components/ui/Title";
import type { CharacterDetail } from "@/interfaces/Character";
import { EpisodeDetailsCard } from "@/components/features/EpisodeDetailsCard";

export function CharacterDetails() {
  const cod = window.location.pathname.split("/").pop();
  const [personaje, setPersonaje] = useState<CharacterDetail | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch characters data from the API
  useEffect(() => {
    CharactersApi.fetchCharactersById(cod!)
      .then((data) => {
        setPersonaje(data);
        setCargando(false);
        // Hacer scroll hacia arriba cuando cambia la página
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        setError(error.message);
        setCargando(false);
        console.error(error);
      });
  }, [cod]);

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
      <div>Character Details Component</div>
      {personaje && <EpisodeDetailsCard personaje={personaje} />}
    </div>
  );
}
