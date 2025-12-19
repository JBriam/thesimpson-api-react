import type { Episode } from "@/interfaces/Episode";

interface EpisodesCardProps {
  episodio: Episode;
}

export function EpisodesCard({ episodio }: EpisodesCardProps) {
  const imageUrl = `https://cdn.thesimpsonsapi.com/500${episodio.image_path}`;
  return (
    <article className="rounded-lg flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
      <div className="relative">
        <span className="bg-yellow-400 rounded-2xl absolute m-4 p-1 px-3 text-sm font-bold text-gray-900 shadow-md shadow-gray-500/50">
          S{episodio.season < 10 ? `0${episodio.season}` : episodio.season}-E
          {episodio.episode_number < 10
            ? `0${episodio.episode_number}`
            : episodio.episode_number}
        </span>
        <img
          src={imageUrl}
          alt={episodio.name}
          className="h-60 w-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-1 gap-4">
        <h3 className="text-gray-900 text-lg font-bold">{episodio.name}</h3>
        <div className="grid grid-cols-2 items-center">
          <p className="text-left text-gray-600 font-semibold text-sm">
            Fecha de Emisión:
          </p>
          <p className="text-right text-gray-900 font-semibold text-sm">
            {!episodio.airdate ? (
              <span className="bg-gray-200 text-gray-500 rounded-lg px-2">
                Sin datos
              </span>
            ) : (
              <span className="text-green-700 bg-green-200 rounded-lg px-2">
                {episodio.airdate}
              </span>
            )}
          </p>
        </div>
        <p className="text-gray-500 text-sm flex-1">{episodio.synopsis}</p>
      </div>
    </article>
  );
}
