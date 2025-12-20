interface SearchProps {
  name: string;
  gender: string;
  status: string;
  onNameChange: (name: string) => void;
  onGenderChange: (gender: string) => void;
  onStatusChange: (status: string) => void;
  onReset: () => void;
}

export function Search({
  name,
  gender,
  status,
  onNameChange,
  onGenderChange,
  onStatusChange,
  onReset,
}: SearchProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-4 bg-white p-4 rounded-lg shadow-md space-between mb-8">
      <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 flex items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-5 h-5 inline-block mr-2 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          id="buscador"
          placeholder="Buscar personaje (ej. Homero, Lisa...)"
          className="grow bg-transparent focus:outline-none"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>
      <div className="flex justify-end font-semibold py-1 px-2 gap-2">
        <button
          onClick={onReset}
          className="w-30 h-10 rounded-4xl border border-gray-300 cursor-pointer bg-white hover:bg-orange-100 hover:border-orange-200 hover:text-amber-700 focus:outline-none focus:ring-0.5 focus:ring-orange-500 focus:border-orange-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 inline-block mr-1 mb-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          Todos
        </button>
        <div className="relative">
          <select
            value={gender}
            onChange={(e) => onGenderChange(e.target.value)}
            className="w-30 h-10 appearance-none rounded-2xl border border-gray-300 cursor-pointer text-center hover:bg-orange-100 hover:border-orange-200 hover:text-amber-700 focus:outline-none focus:ring-0.5 focus:ring-orange-500 focus:border-orange-500 pr-8"
          >
            <option value="" className="bg-white text-gray-400">
              Género
            </option>

            <option value="Male" className="bg-white text-black">
              Masculino
            </option>
            <option value="Female" className="bg-white text-black">
              Femenino
            </option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="relative">
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-30 h-10 appearance-none rounded-2xl border border-gray-300 cursor-pointer text-center hover:bg-orange-100 hover:border-orange-200 hover:text-amber-700 focus:outline-none focus:ring-0.5 focus:ring-orange-500 focus:border-orange-500 pr-8"
          >
            <option value="" className="bg-white text-gray-400">
              Estado
            </option>
            <option value="Alive" className="bg-white text-black">
              Vivo(a)
            </option>
            <option value="Deceased" className="bg-white text-black">
              Muerto(a)
            </option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
