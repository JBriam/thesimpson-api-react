import { Title } from "@/components/ui/Title";
import { LocationsApi } from "@/apis/LocationsApi";
import { LocationsCard } from "@/components/ui/LocationsCard";
import type { Location } from "@/interfaces/Location";
import { useState, useEffect } from "react";

export function Locations() {
  const [ubicaciones, setUbicaciones] = useState<Location[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch characters data from the API
  useEffect(() => {
    LocationsApi.fetchLocations()
      .then((data) => {
        setUbicaciones(data.results);
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
      <div className="max-w-7xl mx-auto p-6 m-8">
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
    <div className="max-w-7xl mx-auto p-6 m-8">
      <Title
        titulo="Explora los rincones de Springfield"
        subtitulo="Descubre dónde ocurren las historias de tus personajes favoritos."
      />
      <div className="grid grid-cols-3 gap-8">
        {ubicaciones.map((ubicacion) => (
          <LocationsCard
            key={ubicacion.id}
            image_path={`https://cdn.thesimpsonsapi.com/500${ubicacion.image_path}`}
            alt={ubicacion.name}
            name={ubicacion.name}
            town={ubicacion.town}
            use={ubicacion.use}
            link={`/locations/${ubicacion.name.toLowerCase().replace(/ /g, "-")}`}
          />
        ))}
      </div>
    </div>
  );
}
