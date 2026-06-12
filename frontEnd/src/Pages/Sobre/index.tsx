import styles from "./style.module.css";
import { FaPaw } from "react-icons/fa";
import animais from "../../assets/Design sem nome (10).png"; // ajuste o caminho se necessário

export default function Sobre() {
  return (
    <div>

      {/* ===== BANNER IGUAL HOME ===== */}
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>
            <FaPaw className={styles.icon} />
            <span className={styles.adote}>Adote</span>
            <span className={styles.pet}>Pet</span>
          </h1>

          <p>Sistema de Cadastro para Adoção</p>
        </div>

        <img
          src={animais}
          className={styles.bannerImg}
          alt="AdotePet"
        />
      </div>

      {/* ===== CONTEÚDO SOBRE ===== */}
      <main className={styles.content}>
        <div className={styles.card}>
          <h1>Sobre o Projeto</h1>

          <p>
            O AdotePet é um sistema desenvolvido para auxiliar ONGs e protetores
            independentes no cadastro e gerenciamento de pets disponíveis para adoção.
          </p>

          <h2>Tecnologias Utilizadas</h2>
          <p>
            Este projeto foi desenvolvido utilizando as seguintes tecnologias:
          </p>
          <ul className={styles.espaco}>
            <li>React</li>
            <li>TypeScript</li>
            <li>CSS Modules</li>
            <li>React Router DOM</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Prisma ORM</li>
            <li>MySQL / MariaDB</li>
            <li>CORS</li>
            <li>dotenv</li>
          </ul>
        </div>
      </main>

    </div>
  );
}