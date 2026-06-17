import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./Pages/Home";
import Pets from "./Pages/Pets";
import Sobre from "./Pages/Sobre";

import { usePets } from "./hooks/usePets";

export default function App() {
  const {
    pets,
    petEditando,
    setPetEditando,
    adicionarPet,
    deletePet
  } = usePets();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                adicionarPet={adicionarPet}
                petEditando={petEditando}
                pets={pets}
                deletePet={deletePet}
                setPetEditando={setPetEditando}
              />
            }
          />

          <Route
            path="/pets"
            element={
              <Pets
                pets={pets}
                deletePet={deletePet}
                setPetEditando={setPetEditando}
              />
            }
          />

          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </div>
  );
}