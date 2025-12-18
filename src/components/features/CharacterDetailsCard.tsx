import { useState } from "react";
import type { CharacterDetail } from "@/interfaces/Character";

interface CharacterDetailsCardProps {
  personaje: CharacterDetail;
}

export function CharacterDetailsCard({ personaje }: CharacterDetailsCardProps) {
  const [expandedEpisode, setExpandedEpisode] = useState(false);
  const [expandedShow, setExpandedShow] = useState(false);
  
  const imageUrl = `https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`;
  const nombreSeparado = personaje.name.split(" ");
  // const formatoFecha = new Date(personaje.birthdate);
  // formatoFecha.setDate(formatoFecha.getDate() + 1); // Ajustar la fecha sumando un día

  return (
    <article className="max-w-7xl mx-auto p-6 m-8">
      <div className="flex items-center justify-center min-h-120 gap-8 bg-amber-300 relative rounded-2xl">
        <img
          src={imageUrl}
          alt={personaje.name}
          className="h-80 w-80 object-cover border-4 border-white rounded-full shadow-2xl bg-sky-300"
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
          <p className="text-gray-600 font-medium flex items-center gap-2">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute -bottom-24 left-0 w-full bg-transparent box-shadow-md"
        >
          <path
            fill="#e5e7eb"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,208C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="grid grid-cols-3 mt-30 gap-6">
        {/* Columna Izquierda: Biografía y Frases */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Biografía */}
          <div className="flex flex-col rounded-lg min-h-55">
            <h1 className="font-bold text-lg p-4 flex items-center bg-blue-900 rounded-t-lg text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-2 text-amber-400"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                  clipRule="evenodd"
                />
              </svg>
              Biografía
            </h1>
            <p className="text-sm text-gray-700 mt-4">
              {personaje.description}
            </p>
          </div>

          {/* Frases Icónicas */}
          <div className="flex flex-col">
            <h1 className="font-bold text-lg p-4 flex items-center bg-green-900 rounded-t-lg text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-2 text-amber-400"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                  clipRule="evenodd"
                />
              </svg>
              Frases Icónicas
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {personaje.phrases.map((phrase, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-sm text-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-amber-400 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-amber-600">Frase {index + 1}</span>
                  </div>
                  <p className="text-sm leading-relaxed">{phrase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna Derecha: Datos Personales y Apariciones */}
        <div className="col-span-1 flex flex-col gap-6">
          {/* Datos Personales */}
          <div className="flex flex-col bg-white rounded-lg min-h-55">
            <h1 className="font-bold text-lg p-4 flex items-center bg-red-900 rounded-t-lg text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2 text-amber-400"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              Datos Personales
            </h1>
            <div className="grid grid-cols-2 gap-3 text-sm p-4">
              <div className="flex flex-col gap-2">
                <span className="text-gray-500">NACIMIENTO</span>
                <p className="font-semibold text-gray-900">{personaje.birthdate}</p>
                <span className="text-gray-500 mt-4">EDAD</span>
                <p className="font-semibold text-gray-900">{personaje.age} años</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-500">GÉNERO</span>
                <p className="font-semibold text-gray-900">{personaje.gender === "Male" ? "Masculino" : "Femenino"}</p>
                <span className="text-gray-500 mt-4">ESTADO</span>
                <p className="font-semibold text-gray-900">{personaje.status === "Alive" ? "Vivo(a)" : "Fallecido(a)"}</p>
              </div>
            </div>
          </div>

          {/* Primera Aparición - Episodio */}
          <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => setExpandedEpisode(!expandedEpisode)}
              className="flex items-center justify-between p-4 bg-amber-400 hover:bg-amber-500 transition-colors cursor-pointer"
            >
              <h1 className="font-bold text-lg text-gray-900 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                </svg>
                Primera Aparición (Episodio)
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-5 h-5 transition-transform ${expandedEpisode ? 'rotate-180' : ''}`}
              >
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="p-4">
              {/* Vista compacta siempre visible */}
              <div className="flex gap-3 mb-3">
                <img
                  src={`https://cdn.thesimpsonsapi.com/500${personaje.first_appearance_ep?.image_path}`}
                  alt={personaje.first_appearance_ep?.name}
                  className="w-20 h-20 object-cover rounded-md shadow-sm"
                />
                <div className="flex flex-col gap-1 text-sm">
                  <p className="font-semibold text-gray-800 line-clamp-2">{personaje.first_appearance_ep?.name}</p>
                  <p className="text-gray-600 text-xs">
                    T{personaje.first_appearance_ep?.season}-E{personaje.first_appearance_ep?.episode_number}
                  </p>
                  <p className="text-gray-600 text-xs">{personaje.first_appearance_ep?.airdate}</p>
                </div>
              </div>
              
              {/* Contenido expandible */}
              {expandedEpisode && (
                <div className="flex flex-col gap-3 pt-3 border-t border-gray-200">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Descripción</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{personaje.first_appearance_ep?.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Sinopsis</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{personaje.first_appearance_ep?.synopsis}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Primera Aparición - Show */}
          <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => setExpandedShow(!expandedShow)}
              className="flex items-center justify-between p-4 bg-blue-400 hover:bg-blue-500 transition-colors cursor-pointer"
            >
              <h1 className="font-bold text-lg text-gray-900 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625Zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5A.375.375 0 0 0 3 5.625Zm16.125-.375a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0 0 21 7.125v-1.5a.375.375 0 0 0-.375-.375h-1.5ZM21 9.375A.375.375 0 0 0 20.625 9h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5ZM4.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5ZM3.375 15h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h1.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 4.875 9h-1.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Zm4.125 0a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z" clipRule="evenodd" />
                </svg>
                Primera Aparición (Short)
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-5 h-5 transition-transform ${expandedShow ? 'rotate-180' : ''}`}
              >
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="p-4">
              {/* Vista compacta siempre visible */}
              <div className="flex gap-3 mb-3">
                <img
                  src={`https://cdn.thesimpsonsapi.com/500${personaje.first_appearance_sh?.image_path}`}
                  alt={personaje.first_appearance_sh?.name}
                  className="w-20 h-20 object-cover rounded-md shadow-sm"
                />
                <div className="flex flex-col gap-1 text-sm">
                  <p className="font-semibold text-gray-800 line-clamp-2">{personaje.first_appearance_sh?.name}</p>
                  <p className="text-gray-600 text-xs">
                    T{personaje.first_appearance_sh?.season}-E{personaje.first_appearance_sh?.episode_number}
                  </p>
                  <p className="text-gray-600 text-xs">{personaje.first_appearance_sh?.airdate}</p>
                </div>
              </div>
              
              {/* Contenido expandible */}
              {expandedShow && (
                <div className="flex flex-col gap-3 pt-3 border-t border-gray-200">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Descripción</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{personaje.first_appearance_sh?.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Sinopsis</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{personaje.first_appearance_sh?.synopsis}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
