interface FilterCharactersProps {
  gender: string;
  status: string;
  onGenderChange: (gender: string) => void;
  onStatusChange: (status: string) => void;
  onReset: () => void;
}

export function FilterCharacters({
  gender,
  status,
  onGenderChange,
  onStatusChange,
  onReset,
}: FilterCharactersProps) {
  return (
    <div className="flex flex-wrap justify-center md:justify-end items-center gap-1.5 sm:gap-2 col-span-full md:col-span-1 min-w-0">
      <button
        onClick={onReset}
        className="px-3 sm:px-4 h-9 sm:h-10 rounded-full border border-gray-200 cursor-pointer bg-white hover:bg-orange-50 hover:border-orange-300 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all shadow-sm flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium whitespace-nowrap"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
        Todos
      </button>
      <div className="relative min-w-0">
        <select
          value={gender}
          onChange={(e) => onGenderChange(e.target.value)}
          className="min-w-[90px] sm:min-w-[110px] h-9 sm:h-10 appearance-none rounded-full border border-gray-200 cursor-pointer text-center hover:bg-orange-50 hover:border-orange-300 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-orange-400 pr-7 sm:pr-8 pl-2 sm:pl-3 transition-all shadow-sm text-xs sm:text-sm font-medium bg-white"
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
      <div className="relative min-w-0">
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="min-w-[90px] sm:min-w-[110px] h-9 sm:h-10 appearance-none rounded-full border border-gray-200 cursor-pointer text-center hover:bg-orange-50 hover:border-orange-300 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-orange-400 pr-7 sm:pr-8 pl-2 sm:pl-3 transition-all shadow-sm text-xs sm:text-sm font-medium bg-white"
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
  );
}
