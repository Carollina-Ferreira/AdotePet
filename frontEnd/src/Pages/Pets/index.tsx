import ListaPets from "../../listaPets";
import type Pet from "../../types/pet";

import animais from "../../assets/animais.png";
import styles from "./style.module.css";
import { FaPaw } from "react-icons/fa";

interface Props {
  pets: Pet[];
  deletePet: (id: number) => void;
  setPetEditando: (pet: Pet) => void;
}

export default function Pets({
  pets,
  deletePet,
  setPetEditando
}: Props) {
  return (
    <main className={styles.content}>

      <div className={styles.header}>

        <div className={styles.textArea}>
          <h1 className={styles.title}>
            <FaPaw className={styles.icon} />
            Pets
          </h1>

          <p className={styles.subtitle}>
            Gerencie os pets cadastrados no sistema
          </p>
        </div>

        <img
          src={animais}
          className={styles.image}
          alt="AdotePet"
        />

      </div>

      <div className={styles.listaContainer}>
        <ListaPets
          pets={pets}
          deletePet={deletePet}
          setPetEditando={setPetEditando}
          showControls={true}
        />
      </div>

    </main>
  );
}