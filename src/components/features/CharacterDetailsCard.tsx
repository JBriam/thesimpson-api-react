import type { CharacterDetail } from "@/interfaces/Character";

interface CharacterDetailsCardProps {
  personaje: CharacterDetail;
}

export function CharacterDetailsCard({ personaje }: CharacterDetailsCardProps) {
  const imageUrl = `https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`;
  const nombreSeparado = personaje.name.split(" ");
  return (
    <article className="max-w-7xl mx-auto p-6 m-8">
      <div className="flex items-center justify-center min-h-100">
        <img
          src={imageUrl}
          alt={personaje.name}
          className="h-80 w-80 object-cover border-4 border-white rounded-full shadow-lg mr-6 bg-sky-300"
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-900 font-bold text-6xl">
              {nombreSeparado[0]}
            </h1>
            <h1 className="text-gray-900 font-bold text-6xl">
              {nombreSeparado.slice(1).join(" ")}
            </h1>
          </div>
          <p className="text-amber-500 font-medium flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
            </svg>
            {personaje.occupation}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-6 gap-6">
        <div className="col-span-2 flex flex-col gap-6">
          <div className="flex flex-col p-4 min-h-64">
            <h1 className="font-bold text-2xl text-gray-900 mb-2">Biografía</h1>
            <hr className="text-gray-300" />
            <p className="text-md text-gray-600 mt-6">{personaje.description}</p>
          </div>
          <div className="flex flex-col p-4 min-h-64">
            <h1 className="font-bold text-2xl text-gray-900 mb-2">Frases</h1>
            <hr className="text-gray-300" />
            <p className="p-6 whitespace-pre-line bg-white rounded-lg shadow-md text-md mt-6 text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 inline-block mr-2 text-amber-400"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                  clipRule="evenodd"
                />
              </svg>
              {personaje.phrases.join("\n\n")}
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <div className="bg-purple-400 min-h-96"></div>
          <div className="bg-gray-400 h-32"></div>
        </div>
      </div>
    </article>
  );
}
