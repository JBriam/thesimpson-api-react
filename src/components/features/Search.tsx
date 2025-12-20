export function Search() {
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
        <input type="text" placeholder="Buscar personaje (ej. Homero, Lisa...)" className="grow bg-transparent focus:outline-none" />
      </div>
      <div className="flex justify-between font-semibold text-sm py-1 px-2 gap-2">
        <button className="w-24 rounded-4xl border border-gray-300 cursor-pointer bg-white">
            Todos
        </button>
        <button className="w-24 rounded-2xl border border-gray-300 cursor-pointer">
            Género
        </button>
        <button className="w-24 rounded-2xl border border-gray-300 cursor-pointer">
            Ocupación
        </button>
      </div>
    </div>
  );
}
