import MainForm from "../../MainForm";
import ListaPets from "../../listaPets";

import type Pet from "../../types/pet";

import animais from "../../assets/Design sem nome (10).png";
import styles from "./style.module.css";
import { FaPaw } from "react-icons/fa";

interface Props {
  adicionarPet: (pet: Omit<Pet, "id">) => void;
  petEditando: Pet | null;
  pets: Pet[];
  deletePet: (id: number) => void;
  setPetEditando: (pet: Pet) => void;
}

export default function Home({
  adicionarPet,
  petEditando,
  pets,
  deletePet,
  setPetEditando
}: Props) {

  return (
    <main className={styles.content}>

      {/* HEADER FULL WIDTH */}
      <div className={styles.banner}>

        <div className={styles.bannerText}>
          <h1>
            <FaPaw className={styles.icon} />
            <span className={styles.adote}>Adote</span>
            <span className={styles.pet}>Pet</span>
          </h1>

          <p>Sistema de Cadastro para Adoção</p>
        </div>

       <img src={animais} className={styles.bannerImg} alt="AdotePet" />
      </div>

      <div className={styles.body}>
        <MainForm
          adicionarPet={adicionarPet}
          petEditando={petEditando}
        />

        <ListaPets
          pets={pets}
          deletePet={deletePet}
          setPetEditando={setPetEditando}
        />
      </div>

    </main>
  );
}