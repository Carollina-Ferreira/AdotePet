import styles from "./style.module.css";
import logo from "../../assets/logo.png";

import { FiHome, FiInfo } from "react-icons/fi";
import { FaPaw } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      
      <div>
        <div className={styles.logoBox}>
          <div className={styles.logo}>
            <span className={styles.adote}>Adote</span>
            <span className={styles.pet}>Pet</span>
          </div>

          <small className={styles.subtitle}>
            Sistema de adoção
          </small>
        </div>

        <nav className={styles.nav}>
          
          <a href="/">
            <FiHome className={styles.icon} />
            Início
          </a>

          <a href="/pets">
            <FaPaw className={styles.icon} />
            Pets
          </a>

          <a href="/sobre">
            <FiInfo className={styles.icon} />
            Sobre
          </a>

        </nav>
      </div>
      <div className={styles.footer}>
        <img src={logo} className={styles.footerImg} alt="AdotePet" />
      </div>

    </div>
  );
}