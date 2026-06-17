import { useEffect, useState } from "react";
import type Pet from "../types/pet";

import {
  listarPets,
  criarPet,
  atualizarPet,
  deletarPet
} from "../services/pet.service";

export function usePets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [petEditando, setPetEditando] = useState<Pet | null>(null);

  // 🔥 carregar pets do backend
  async function carregarPets() {
    const data = await listarPets();
    setPets(data);
  }

  useEffect(() => {
    carregarPets();
  }, []);

  // ➕ criar ou editar pet
  async function adicionarPet(pet: Omit<Pet, "id">) {
    if (petEditando) {
      await atualizarPet(petEditando.id, pet);
      setPetEditando(null);
    } else {
      await criarPet(pet);
    }

    await carregarPets();
  }

  // ❌ deletar pet
  async function deletePet(id: number) {
    const confirmar = window.confirm("Deseja excluir este pet?");
    if (!confirmar) return;

    await deletarPet(id);
    await carregarPets();
  }

  return {
    pets,
    petEditando,
    setPetEditando,
    adicionarPet,
    deletePet,
    carregarPets
  };
}