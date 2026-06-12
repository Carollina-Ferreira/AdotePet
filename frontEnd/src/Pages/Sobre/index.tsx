import styles from "./style.module.css";

export default function Sobre() {

  return (

    <main
      className={styles.content}
    >

      <div
        className={styles.card}
      >

        <h1>
          Sobre o Projeto
        </h1>

        <p>
          O AdotePet é um sistema
          desenvolvido para auxiliar
          ONGs e protetores
          independentes no cadastro
          e gerenciamento de pets
          disponíveis para adoção.
        </p>

        <h2>
          Tecnologias Utilizadas
        </h2>

        <ul>

          <li>React</li>

          <li>TypeScript</li>

          <li>CSS Modules</li>

          <li>React Router DOM</li>

          <li>LocalStorage</li>

        </ul>

      </div>

    </main>

  );
}