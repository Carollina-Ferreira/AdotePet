import { useState, useEffect } from "react";

import InputPadrao from "../components/inputPadrao";
import BotaoPadrao from "../components/botaoPadrao";

import type Pet from "../types/pet.ts";


import styles from "./style.module.css";
import { FaPaw } from "react-icons/fa";

interface Props {
  adicionarPet: (
    pet: Omit<Pet, "id">
  ) => void;

  petEditando:
  Pet | null;
}
export default function MainForm({
  adicionarPet,
  petEditando
}: Props) {

  const [nome, setNome] =
    useState("");

  const [especie, setEspecie] =
    useState("");

  const [raca, setRaca] =
    useState("");

  const [idade, setIdade] =
    useState("");

  const [status, setStatus] =
    useState("");

  function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    if (
      !nome ||
      !especie ||
      !raca ||
      !idade ||
      !status
    ) {
      alert(
        "Preencha todos os campos."
      );
      return;
    }

    adicionarPet({
      nome,
      especie,
      raca,
      idade: Number(idade),
      status
    });

    setNome("");
    setEspecie("");
    setRaca("");
    setIdade("");
    setStatus("");
  }

  useEffect(() => {

    if (petEditando) {

      setNome(
        petEditando.nome
      );

      setEspecie(
        petEditando.especie
      );

      setRaca(
        petEditando.raca
      );

      setIdade(
        String(
          petEditando.idade
        )
      );

      setStatus(
        petEditando.status
      );

    }

  }, [petEditando]);

  return (
    <div className={styles.card}>

      <h2 className={styles.title}>
        <FaPaw /> Cadastrar Pet
      </h2>

      <div className={styles.line}></div>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >

        <div className={styles.field}>
          <label>Nome</label>

          <InputPadrao
            value={nome}
            onChange={(e) =>
              setNome(e.target.value)
            }
            placeholder="Ex: Rex"
          />
        </div>

        <div className={styles.field}>
          <label>Espécie</label>

          <select
            value={especie}
            onChange={(e) =>
              setEspecie(e.target.value)
            }
            className={styles.select}
          >
            <option value="">
              Selecione
            </option>

            <option value="Cachorro">
              Cachorro
            </option>

            <option value="Gato">
              Gato
            </option>

            <option value="Coelho">
              Coelho
            </option>
          </select>
        </div>

        <div className={styles.field}>
          <label>Raça</label>

          <InputPadrao
            value={raca}
            onChange={(e) =>
              setRaca(e.target.value)
            }
            placeholder="Ex: Labrador"
          />
        </div>

        <div className={styles.fieldSmall}>
          <label>Idade</label>

          <InputPadrao
            value={idade}
            onChange={(e) =>
              setIdade(e.target.value)
            }
            placeholder="Ex: 3"
            type="number"
          />
        </div>

        <div className={styles.field}>
          <label>Status</label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className={styles.select}
          >
            <option value="">
              Selecione
            </option>

            <option value="Disponível">
              Disponível
            </option>

            <option value="Adotado">
              Adotado
            </option>

            <option value="Em Tratamento">
              Em Tratamento
            </option>
          </select>
        </div>

        <BotaoPadrao
          text={
            <>
              <FaPaw className={styles.button}/>
              {petEditando ? "Atualizar Pet" : "Salvar Pet"}
            </>
          }
          type="submit"
        />

      </form>

    </div>
  );
}