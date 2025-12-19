import type { Location, LocationDetail } from "@/interfaces/Location";
import { useState } from "react";
import { LocationsApi } from "@/apis/LocationsApi";

interface LocationsCardProps {
  ubicacion: Location;
}

export function LocationsCard({ ubicacion }: LocationsCardProps) {
  const [descripcion, setDescripcion] = useState<string | null>(null);
  const [cargandoDescripcion, setCargandoDescripcion] = useState(false);
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  const cargarDescripcion = async () => {
    if (descripcion) {
      // Si ya tenemos la descripción, solo alternamos la vista
      setMostrarDescripcion(!mostrarDescripcion);
      return;
    }

    // Si no tenemos la descripción, hacemos la segunda llamada API
    setCargandoDescripcion(true);
    try {
      const data: LocationDetail = await LocationsApi.fetchLocationsById(
        ubicacion.id.toString()
      );
      setDescripcion(data.description);
      setMostrarDescripcion(true);
    } catch (error) {
      console.error("Error al cargar la descripción:", error);
      setDescripcion("Error al cargar la descripción");
    } finally {
      setCargandoDescripcion(false);
    }
  };

  const imageUrl = `https://cdn.thesimpsonsapi.com/500${ubicacion.image_path}`;
  return (
    <article className="rounded-lg flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
      <img
        src={imageUrl}
        alt={ubicacion.name}
        className="h-60 w-full object-cover"
      />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-gray-900 text-lg font-bold">{ubicacion.name}</h3>
        <div className="grid grid-cols-2 mt-4 flex-1 items-center">
          <div className="flex flex-col gap-4 text-left text-gray-500 font-semibold text-sm flex-1">
            <p>Ciudad:</p>
            <p>Tipo:</p>
          </div>
          <div className="flex flex-col gap-4 text-right text-gray-900 font-semibold text-sm flex-1">
            <p>
              {!ubicacion.town ? (
                <span className="bg-gray-200 text-gray-500 rounded-lg px-2">
                  Sin datos
                </span>
              ) : (
                <span className="text-blue-700 bg-blue-200 rounded-lg px-2">
                  {ubicacion.town}
                </span>
              )}
            </p>
            <p>
              {!ubicacion.use ? (
                <span className="bg-gray-200 text-gray-500 rounded-lg px-2">
                  Sin datos
                </span>
              ) : (
                <span className="text-green-700 bg-green-200 rounded-lg px-2">
                  {ubicacion.use}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Botón para cargar/mostrar descripción */}
        <button
          onClick={cargarDescripcion}
          disabled={cargandoDescripcion}
          className="bg-purple-200 flex cursor-pointer mt-4 font-semibold text-purple-700 hover:bg-purple-300 hover:text-purple-900 transition-colors duration-200 items-center rounded-lg px-4 py-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {cargandoDescripcion ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full inline-block border-t-2 border-solid border-transparent border-t-purple-700 animate-spin"></span>
              Cargando...
            </span>
          ) : mostrarDescripcion ? (
            <>
              Ocultar descripción{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 inline-block ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </>
          ) : (
            <>
              Ver descripción{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 inline-block ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </>
          )}
        </button>

        {/* Descripción expandible */}
        {mostrarDescripcion && descripcion && (
          <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">
              Descripción:
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {descripcion}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
