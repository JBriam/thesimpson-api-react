import { CharactersApi } from "@/apis/CharactersApi";
import { CharactersCard } from "@/components/ui/CharactersCard";
import { Title } from "@/components/features/Title";
import { useState, useEffect } from "react";
import type { Character } from "@/interfaces/Character";
import { Pagination } from "@/components/features/Pagination";
import { Search } from "@/components/features/Search";

export function Characters() {
  const [personajes, setPersonajes] = useState<Character[]>([]);
  const [todosLosPersonajes, setTodosLosPersonajes] = useState<Character[]>([]);
  const [cargando, setCargando] = useState(true);
  const [cargandoBusqueda, setCargandoBusqueda] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  // Estados para los filtros de búsqueda
  const [nombreFiltro, setNombreFiltro] = useState("");
  const [generoFiltro, setGeneroFiltro] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("");

  // Fetch characters data from the API
  useEffect(() => {
    CharactersApi.fetchCharacters(paginaActual)
      .then((data) => {
        setPersonajes(data.results);
        setTotalPaginas(data.pages);
        setCargando(false);
        // Hacer scroll hacia arriba cuando cambia la página
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        setError(error.message);
        setCargando(false);
        console.error(error);
      });
  }, [paginaActual]);

  // Cargar todos los personajes cuando hay búsqueda por nombre
  useEffect(() => {
    const cargarTodosLosPersonajes = async () => {
      if (nombreFiltro === "") {
        return;
      }
      
      setCargandoBusqueda(true);
      try {
        const primeraPagina = await CharactersApi.fetchCharacters(1);
        const totalPags = primeraPagina.pages;
        
        // Cargar todas las páginas en paralelo
        const promesas = [];
        for (let i = 1; i <= totalPags; i++) {
          promesas.push(CharactersApi.fetchCharacters(i));
        }
        
        const resultados = await Promise.all(promesas);
        const todosPersonajes = resultados.flatMap(r => r.results);
        setTodosLosPersonajes(todosPersonajes);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setCargandoBusqueda(false);
      }
    };
    
    cargarTodosLosPersonajes();
  }, [nombreFiltro]);

  const handlePageChange = (nuevaPagina: number) => {
    setPaginaActual(nuevaPagina);
  };

  // Función para resetear todos los filtros
  const handleResetFiltros = () => {
    setNombreFiltro("");
    setGeneroFiltro("");
    setEstadoFiltro("");
  };

  // Filtrar personajes según los criterios de búsqueda
  // Si hay búsqueda por nombre, usar todos los personajes; si no, usar solo la página actual
  const listaParaFiltrar = nombreFiltro !== "" && todosLosPersonajes.length > 0 
    ? todosLosPersonajes 
    : personajes;
   
  const personajesFiltrados = listaParaFiltrar.filter((personaje) => {
    const cumpleNombre =
      nombreFiltro === "" ||
      personaje.name.toLowerCase().includes(nombreFiltro.toLowerCase());

    const cumpleGenero =
      generoFiltro === "" || personaje.gender === generoFiltro;

    const cumpleEstado =
      estadoFiltro === "" || personaje.status === estadoFiltro;

    return cumpleNombre && cumpleGenero && cumpleEstado;
  });

  const estaCargando = cargando || cargandoBusqueda;

  if (estaCargando && personajes.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-6 m-8">
        <Title
          titulo="Personajes de Springfield"
          subtitulo="Explora el elenco completo de tu serie favorita"
        />
        <div className="min-h-50 flex items-center justify-center">
          <span className="w-12 h-12 rounded-[50%] inline-block border-t-[3px] border-solid border-transparent border-t-yellow-500 animate-spin"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-6 m-8">
        <Title
          titulo="Personajes de Springfield"
          subtitulo="Explora el elenco completo de tu serie favorita"
        />
        <div className="min-h-50 flex items-center justify-center">
          <p className="text-center text-xl text-red-600 mt-8">
            Error: {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 m-8">
      <Title
        titulo="Personajes de Springfield"
        subtitulo="Explora el elenco completo de tu serie favorita"
      />
      <Search
        name={nombreFiltro}
        gender={generoFiltro}
        status={estadoFiltro}
        onNameChange={setNombreFiltro}
        onGenderChange={setGeneroFiltro}
        onStatusChange={setEstadoFiltro}
        onReset={handleResetFiltros}
      />
      {cargandoBusqueda && (
        <div className="flex justify-center py-4">
          <span className="w-8 h-8 rounded-[50%] inline-block border-t-[3px] border-solid border-transparent border-t-yellow-500 animate-spin"></span>
          <span className="ml-3 text-gray-600">Buscando en todas las páginas...</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {personajesFiltrados.map((personaje) => (
          <CharactersCard key={personaje.id} personaje={personaje} />
        ))}
      </div>
      {personajesFiltrados.length === 0 && (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">
            No se encontraron personajes con esos filtros
          </p>
        </div>
      )}
      {nombreFiltro === "" && (
        <Pagination
          currentPage={paginaActual}
          totalPages={totalPaginas}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
