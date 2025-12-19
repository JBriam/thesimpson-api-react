import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/layouts/Layout";
import { Home } from "@/pages/Home";
import { lazy, Suspense } from "react";

// Lazy loading de componentes de páginas
const Characters = lazy(() => import("@/pages/nav/Characters").then(module => ({ default: module.Characters })));
const Episodes = lazy(() => import("@/pages/nav/Episodes").then(module => ({ default: module.Episodes })));
const Locations = lazy(() => import("@/pages/nav/Locations").then(module => ({ default: module.Locations })));
const CharacterDetails = lazy(() => import("@/pages/details/CharacterDetails").then(module => ({ default: module.CharacterDetails })));
const PageNotFound = lazy(() => import("@/pages/PageNotFound").then(module => ({ default: module.PageNotFound })));

// Componente de carga
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <span className="w-12 h-12 rounded-[50%] inline-block border-t-[3px] border-solid border-transparent border-t-yellow-500 animate-spin"></span>
  </div>
);

function App() {
  // APIs:
  // https://thesimpsonsapi.com/api/characters
  // https://thesimpsonsapi.com/api/episodes
  // https://thesimpsonsapi.com/api/locations

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/characters/:id" element={<CharacterDetails />} />
              <Route path="/episodes" element={<Episodes />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
