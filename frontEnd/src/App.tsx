import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./Pages/Home";
import Pets from "./Pages/Pets";
import Sobre from "./Pages/Sobre";

import type Pet from "./types/pet";

import {
  listarPets,
  criarPet,
  atualizarPet,
  deletarPet
} from "./services/pet.service";

export default function App() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [petEditando, setPetEditando] = useState<Pet | null>(null);

  // 🔥 CARREGAR DO BACKEND
  async function carregarPets() {
    const data = await listarPets();
    setPets(data);
  }

  useEffect(() => {
    carregarPets();
  }, []);

  // ➕ criar / editar
  async function adicionarPet(pet: Omit<Pet, "id">) {
    if (petEditando) {
      await atualizarPet(petEditando.id, pet);
      setPetEditando(null);
    } else {
      await criarPet(pet);
    }

    carregarPets();
  }

  // ❌ deletar
  async function deletePet(id: number) {
    const confirmar = window.confirm("Deseja excluir este pet?");
    if (!confirmar) return;

    await deletarPet(id);
    carregarPets();
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