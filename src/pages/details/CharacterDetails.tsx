import { useEffect, useState } from "react";
import { CharactersApi } from "@/apis/CharactersApi";
import type { CharacterDetail } from "@/interfaces/Character";
import { CharacterDetailsCard } from "@/components/ui/CharacterDetailsCard";

export function CharacterDetails() {
  const cod = window.location.pathname.split("/").pop();
  const [personaje, setPersonaje] = useState<CharacterDetail | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch characters data from the API
  useEffect(() => {
    if (cod) {
      CharactersApi.fetchCharactersById(cod)
        .then((data) => {
          console.log("Datos enviados: ",data);
          setPersonaje(data);
          setCargando(false);
        })
        .catch((error) => {
          console.error("Error fetching character data: ", error);
          setError(error.message);
          setCargando(false);
        });
    }
  }, [cod]);

  if (cargando) {
    return (
      <div className="max-w-7xl mx-auto p-6 m-8">
        <div className="min-h-50 flex items-center justify-center">
          <span className="w-12 h-12 rounded-[50%] inline-block border-t-[3px] border-solid border-transparent border-t-yellow-500 animate-spin"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-6 m-8">
        <div className="min-h-50 flex items-center justify-center">
          <p className="text-center text-xl text-red-600 mt-8">
            Error: {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {personaje && <CharacterDetailsCard personaje={personaje} />}
    </div>
  );
}
