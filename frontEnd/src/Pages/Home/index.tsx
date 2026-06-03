import { useEffect, useState } from "react";
import type Pet  from "../../types/pet.ts";

import MainForm from "../../MainForm";
import ListaPets from "../../listaPets";

export default function Home() {

  const [pets, setPets] =
    useState<Pet[]>([]);

  const [petEditando, setPetEditando] =
    useState<Pet | null>(null);

  useEffect(() => {
    const dados =
      localStorage.getItem("pets");

    if (dados) {
      setPets(JSON.parse(dados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "pets",
      JSON.stringify(pets)
    );
  }, [pets]);

  function addPet(
    pet: Omit<Pet, "id">
  ) {
    setPets([
      ...pets,
      {
        id: Date.now(),
        ...pet
      }
    ]);
  }

  function updatePet(
    petAtualizado: Pet
  ) {
    setPets(
      pets.map((pet) =>
        pet.id === petAtualizado.id
          ? petAtualizado
          : pet
      )
    );

    setPetEditando(null);
  }

  function deletePet(id: number) {
    setPets(
      pets.filter(
        (pet) => pet.id !== id
      )
    );
  }

  return (
    <>
      <h1>🐾 AdotePet</h1>

      <MainForm
        addPet={addPet}
        updatePet={updatePet}
        petEditando={petEditando}
      />

      <ListaPets
        pets={pets}
        deletePet={deletePet}
        setPetEditando={setPetEditando}
      />
    </>
  );
}