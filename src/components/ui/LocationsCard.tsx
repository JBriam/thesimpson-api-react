import type { Location } from "@/interfaces/Location";

interface LocationsCardProps {
  ubicacion: Location;
}

export function LocationsCard({
  ubicacion,
}: LocationsCardProps) {
  const imageUrl = `https://cdn.thesimpsonsapi.com/500${ubicacion.image_path}`;
  return (
    <article className="rounded-lg flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
      <img src={imageUrl} alt={ubicacion.name} className="h-60 w-full object-cover" />
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
        <a
          href={`/locations/${ubicacion.id}`}
          className="bg-amber-200 flex cursor-pointer mt-6 font-semibold text-gray-500 hover:bg-amber-300 hover:text-gray-900 hover:font-bold transition-colors duration-200 items-center rounded-lg px-4 py-2 justify-center"
        >
          Ver detalles
        </a>
      </div>
    </article>
  );
}
