interface CharactersCardProps {
  portrait_path: string;
  alt: string;
  name: string;
  birthdate: string;
  gender: string;
  status: string;
  link: string;
}

export function CharactersCard({
  portrait_path,
  alt,
  name,
  birthdate,
  gender,
  status,
  link,
}: CharactersCardProps) {
  return (
    <article className="rounded-lg flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
      <img
        src={portrait_path}
        alt={alt}
        className={`h-60 w-full object-cover ${
          status === "Alive" ? "" : "grayscale-100"
        }`}
      />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-gray-900 text-lg font-bold">{name}</h3>
        <div className="grid grid-cols-2 mt-4 flex-1 items-center">
          <div className="flex flex-col gap-4 text-left text-gray-500 font-semibold text-sm flex-1">
            <p>F. Nacimiento:</p>
            <p>Género:</p>
            <p>Estado:</p>
          </div>
          <div className="flex flex-col gap-4 text-right text-gray-900 font-semibold text-sm flex-1">
            <p>
              {!birthdate ? (
                <span className="bg-gray-200 text-gray-400 rounded-lg px-2">
                  Desconocida
                </span>
              ) : (
                <span className="bg-gray-200 rounded-lg px-2">{birthdate}</span>
              )}
            </p>
            <p>
              {gender === "Male" ? (
                <span className="text-blue-700 bg-blue-200 rounded-lg px-2">
                  Masculino
                </span>
              ) : (
                <span className="text-purple-700 bg-purple-200 rounded-lg px-2">
                  Femenino
                </span>
              )}
            </p>
            <p>
              {status === "Alive" ? (
                <span className="text-green-700 bg-green-200 rounded-lg px-2">
                  {gender === "Male" ? "Vivo" : "Viva"}
                </span>
              ) : (
                <span className="text-red-500 bg-red-200 rounded-lg px-2">
                  {gender === "Male" ? "Fallecido" : "Fallecida"}
                </span>
              )}
            </p>
          </div>
        </div>
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
