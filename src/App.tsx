import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/layouts/Layout";
import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";
import { Episodes } from "./pages/Episodes";
import { Locations } from "./pages/Locations";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  // APIs:
  // https://thesimpsonsapi.com/api/characters
  // https://thesimpsonsapi.com/api/episodes
  // https://thesimpsonsapi.com/api/locations

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
