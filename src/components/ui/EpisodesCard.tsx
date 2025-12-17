interface EpisodesCardProps {
  image_path: string;
  alt: string;
  name: string;
  season: number;
  episode_number: number;
  airdate: string;
  synopsis: string;
  link: string;
}

export function EpisodesCard({
  image_path,
  alt,
  name,
  season,
  episode_number,
  airdate,
  synopsis,
  link,
}: EpisodesCardProps) {
  return (
    <article className="rounded-lg flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
      <div className="relative">
        <span className="bg-yellow-400 rounded-2xl absolute m-4 p-1 px-3 text-sm font-bold text-gray-900 shadow-md shadow-gray-500/50">
          S{season < 10 ? `0${season}` : season}-E
          {episode_number < 10 ? `0${episode_number}` : episode_number}
        </span>
        <img src={image_path} alt={alt} className="h-60 w-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-1 gap-4">
        <h3 className="text-gray-900 text-lg font-bold">{name}</h3>
        <div className="grid grid-cols-2 items-center">
          <p className="text-left text-gray-600 font-semibold text-sm">
            Fecha de Emisión:
          </p>
          <p className="text-right text-gray-900 font-semibold text-sm">
            {!airdate ? (
              <span className="bg-gray-200 text-gray-500 rounded-lg px-2">
                Sin datos
              </span>
            ) : (
              <span className="text-green-700 bg-green-200 rounded-lg px-2">
                {airdate}
              </span>
            )}
          </p>
        </div>
        <p className="text-gray-500 text-sm flex-1">{synopsis}</p>
        <a
          href={link}
          className="bg-amber-200 flex cursor-pointer mt-6 font-semibold text-gray-500 hover:bg-amber-300 hover:text-gray-900 hover:font-bold transition-colors duration-200 items-center rounded-lg px-4 py-2 justify-center"
        >
          Ver detalles
        </a>
      </div>
    </article>
  );
}
