interface SearchTextProps {
  name: string;
  placeholder?: string;
  onNameChange: (name: string) => void;
}

export function SearchText({
  name,
  placeholder,
  onNameChange,
}: SearchTextProps) {
  return (
    <div className="bg-gray-50 p-2.5 sm:p-3 rounded-lg border border-gray-200 flex items-center gap-2 col-span-full md:col-span-2 shadow-sm hover:border-gray-300 transition-colors">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-gray-400"
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
        placeholder={placeholder || "Buscar..."}
        className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400 min-w-0 text-sm sm:text-base"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
    </div>
  );
}
