import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="flex items-center p-4 justify-between px-8 fixed top-0 left-0 right-0 shadow-md bg-white z-50">
      <NavLink to="/">
        <img src="logo-simpson.svg" alt="Logo Simpson" className="w-45 h-14" />
      </NavLink>
      <nav>
        <ul className="flex flex-row gap-6 p-2 text-md font-medium text-gray-900">
          <li>
            <NavLink
              to="/characters"
              className={({ isActive }) =>
                `cursor-pointer hover:text-yellow-400 hover:border-b-2 hover:border-blue-300 focus:outline-none transition-colors duration-200 ${
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 font-bold pointer-events-none"
                    : ""
                }`
              }
            >
              Personajes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/episodes"
              className={({ isActive }) =>
                `cursor-pointer hover:text-yellow-400 hover:border-b-2 hover:border-blue-300 focus:outline-none transition-colors duration-200 ${
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 font-bold pointer-events-none"
                    : ""
                }`
              }
            >
              Episodios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/locations"
              className={({ isActive }) =>
                `cursor-pointer hover:text-yellow-400 hover:border-b-2 hover:border-blue-300 focus:outline-none transition-colors duration-200 ${
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 font-bold pointer-events-none"
                    : ""
                }`
              }
            >
              Ubicaciones
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
