import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `cursor-pointer hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 focus:outline-none transition-colors duration-200 block py-2 md:py-0 ${
      isActive
        ? "text-yellow-400 border-b-2 border-yellow-400 font-bold pointer-events-none"
        : ""
    }`;

  const linkStyle = {
    textShadow:
      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  };

  return (
    <header className="fixed top-0 left-0 right-0 shadow-md bg-sky-500 z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <NavLink to="/" className="shrink-0">
          <img 
            src="/logo-simpson.svg" 
            alt="Logo Simpson" 
            className="h-10 w-auto sm:h-12 md:h-14" 
          />
        </NavLink>

        {/* Botón hamburguesa (móvil) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover:text-yellow-400 transition-colors"
          aria-label="Menú de navegación"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navegación desktop */}
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-6 text-md font-medium text-white">
            <li>
              <NavLink to="/characters" className={linkClass} style={linkStyle}>
                Personajes
              </NavLink>
            </li>
            <li>
              <NavLink to="/episodes" className={linkClass} style={linkStyle}>
                Episodios
              </NavLink>
            </li>
            <li>
              <NavLink to="/locations" className={linkClass} style={linkStyle}>
                Ubicaciones
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <nav className="md:hidden bg-sky-600 border-t border-sky-400">
          <ul className="flex flex-col px-4 py-2 text-md font-medium text-white">
            <li>
              <NavLink
                to="/characters"
                className={linkClass}
                style={linkStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                Personajes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/episodes"
                className={linkClass}
                style={linkStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                Episodios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/locations"
                className={linkClass}
                style={linkStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                Ubicaciones
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
