export function Header() {
  return (
    <>
      <header className="flex items-center p-4 justify-around">
        <a href="/">
          <img
            src="logo-simpson.svg"
            alt="Logo Simpson"
            className="w-45 h-14"
          />
        </a>
        <nav>
          <ul className="flex flex-row gap-4 p-2">
            <a href="/characters">
              <li>Personajes</li>
            </a>
            <a href="/episodes">
              <li>Capítulos</li>
            </a>
            <a href="/locations">
              <li>Ubicaciones</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}
