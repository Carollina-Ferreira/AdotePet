import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./Pages/Home";
import Pets from "./Pages/Pets";
import Sobre from "./Pages/Sobre";

import type Pet from "./types/pet";

export default function App() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [petEditando, setPetEditando] = useState<Pet | null>(null);

  // carregar localStorage
  useEffect(() => {
    const petsSalvos = localStorage.getItem("pets");

    if (petsSalvos) {
      try {
        setPets(JSON.parse(petsSalvos));
      } catch {
        setPets([]);
      }
    }
  }, []);

  // salvar localStorage
  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(pets));
  }, [pets]);

  function adicionarPet(pet: Omit<Pet, "id">) {
    if (petEditando) {
      setPets((prev) =>
        prev.map((item) =>
          item.id === petEditando.id
            ? { ...pet, id: petEditando.id }
            : item
        )
      );

      setPetEditando(null);
      return;
    }

    setPets((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...pet
      }
    ]);
  }

  function deletePet(id: number) {
    const confirmar = window.confirm("Deseja excluir este pet?");
    if (!confirmar) return;

    setPets((prev) => prev.filter((pet) => pet.id !== id));
  }

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