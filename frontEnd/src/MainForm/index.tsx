import { useEffect, useState } from "react";
import type Pet  from "../types/pet.ts";
import BotaoPadrao from "../components/botaoPadrao";
import InputPadrao from "../components/inputPadrao";

interface Props {
  addPet: (pet: Omit<Pet, "id">) => void;
  updatePet: (pet: Pet) => void;
  petEditando: Pet | null;
}

export default function MainForm({
  addPet,
  updatePet,
  petEditando
}: Props) {

  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [idade, setIdade] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (petEditando) {
      setNome(petEditando.nome);
      setEspecie(petEditando.especie);
      setRaca(petEditando.raca);
      setIdade(petEditando.idade);
      setStatus(petEditando.status);
    }
  }, [petEditando]);

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const pet = {
      nome,
      especie,
      raca,
      idade,
      status
    };

    if (petEditando) {
      updatePet({
        id: petEditando.id,
        ...pet
      });
    } else {
      addPet(pet);
    }

    setNome("");
    setEspecie("");
    setRaca("");
    setIdade(0);
    setStatus("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputPadrao
        value={nome}
        onChange={(e) =>
          setNome(e.target.value)
        }
        placeholder="Nome"
      />

      <InputPadrao
        value={especie}
        onChange={(e) =>
          setEspecie(e.target.value)
        }
        placeholder="Espécie"
      />

      <InputPadrao
        value={raca}
        onChange={(e) =>
          setRaca(e.target.value)
        }
        placeholder="Raça"
      />

      <InputPadrao
        value={idade}
        onChange={(e) =>
          setIdade(Number(e.target.value))
        }
        placeholder="Idade"
        type="number"
      />

      <InputPadrao
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        placeholder="Status"
      />

      <BotaoPadrao
        type="submit"
        text="Salvar Pet"
      />
    </form>
  );
}