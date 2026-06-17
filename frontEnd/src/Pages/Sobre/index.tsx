import styles from "./style.module.css";
import { FaPaw } from "react-icons/fa";
import animais from "../../assets/Design sem nome (10).png";

export default function Sobre() {
  return (
    <div>
      {/* ===== BANNER ===== */}
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

      {/* ===== CONTEÚDO ===== */}
      <main className={styles.content}>
        <div className={styles.card}>
          <h1>Sobre o Projeto</h1>

          <p>
            O <strong>AdotePet</strong> é um sistema desenvolvido para auxiliar ONGs e
            protetores independentes no cadastro e gerenciamento de pets disponíveis para adoção.
          </p>

          <p>
            O objetivo do projeto é facilitar a adoção responsável e organizar
            todo o processo de forma simples e eficiente.
          </p>

          {/* ===== TECNOLOGIAS ===== */}
          <h2>Tecnologias Utilizadas</h2>

          <h3>💻 Front-end</h3>
          <ul className={styles.espaco}>
            <li>React</li>
            <li>TypeScript</li>
            <li>CSS Modules</li>
            <li>React Router DOM</li>
          </ul>

          <h3>⚙️ Back-end</h3>
          <ul className={styles.espaco}>
            <li>Node.js</li>
            <li>Express</li>
            <li>Prisma ORM</li>
            <li>CORS</li>
            <li>dotenv</li>
          </ul>

          <h3>🗄️ Banco de Dados</h3>
          <ul className={styles.espaco}>
            <li>MySQL</li>
            <li>MariaDB</li>
          </ul>

          <h3>🛠️ Ferramentas</h3>
          <ul className={styles.espaco}>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>npm</li>
          </ul>

          {/* ===== HOSPEDAGEM ===== */}
          <h2>🌐 Hospedagem / Deploy</h2>

          <h3>💻 Front-end</h3>
          <ul className={styles.espaco}>
            <li>
              <a href="https://vercel.com" target="_blank" rel="noreferrer">
                Vercel
              </a>
            </li>
          </ul>

          <h3>⚙️ Back-end</h3>
          <ul className={styles.espaco}>
            <li>
              <a href="https://render.com" target="_blank" rel="noreferrer">
                Render
              </a>
            </li>
          </ul>

          <h3>🗄️ Banco de Dados</h3>
          <ul className={styles.espaco}>
            <li>
              <a href="https://aiven.io" target="_blank" rel="noreferrer">
                Aiven
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}