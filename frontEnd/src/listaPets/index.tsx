import type Pet from "../types/pet";

import styles from "./style.module.css";
import { FaPaw, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  pets: Pet[];
  deletePet: (id: number) => void;
  setPetEditando: (pet: Pet) => void;
  showControls?: boolean;
}

export default function ListaPets({
  pets,
  deletePet,
  setPetEditando,
  showControls = false,
}: Props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const petsFiltrados = pets.filter(
    (pet) =>
      pet.nome.toLowerCase().includes(search.toLowerCase()) ||
      pet.raca.toLowerCase().includes(search.toLowerCase()) ||
      pet.especie.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        <FaPaw />
        Pets Cadastrados
      </h2>

      {showControls && (
        <div className={styles.controls}>
          <div className={styles.count}>
            Total de pets: <strong>{pets.length}</strong>
          </div>

          <div className={styles.rightControls}>
            <div className={styles.searchContainer}>
              <FaSearch className={styles.searchIcon} />

              <input
                className={styles.search}
                placeholder="Buscar pet..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button
              className={styles.newButton}
              onClick={() => navigate("/")}
            >
              + Novo Pet
            </button>
          </div>
        </div>
      )}
      <div className={styles.tableWrapper}>
  <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Raça</th>
            <th>Idade</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {petsFiltrados.length === 0 ? (
            <tr>
              <td colSpan={6} className={styles.empty}>
                Nenhum pet encontrado.
              </td>
            </tr>
          ) : (
            petsFiltrados.map((pet) => {
              const statusKey = pet.status.replace(" ", "");

              return (
                <tr key={pet.id}>
                  <td>{pet.nome}</td>
                  <td>{pet.especie}</td>
                  <td>{pet.raca}</td>
                  <td>{pet.idade}</td>

                  <td>
                    <span className={`${styles.status} ${styles[statusKey]}`}>
                      {pet.status}
                    </span>
                  </td>

                  <td className={styles.actions}>
                    <button
                      className={styles.editButton}
                      onClick={() => {
                        setPetEditando(pet);
                        navigate("/");
                      }}
                    >
                      <FaEdit className={styles.icon} />
                      Editar
                    </button>

                    <button
                      className={styles.deleteButton}
                      onClick={() => deletePet(pet.id)}
                    >
                      <FaTrash className={styles.icon} />
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })
          )}
                </tbody>
      </table>
    </div>
  </div>
);
}