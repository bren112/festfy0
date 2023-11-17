// import styles from './Contatos.module.css'

import { Link } from "react-router-dom";
import styles from "./Contatos.module.css";
import { GoMail } from "react-icons/go";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
function Contatos() {
  return (
    <>
      <div className={styles.contato}>
        <h2>Contatos</h2>
        <h3>Entre em Contato</h3>
        <p>
          <Link to="">Para que possamos conversar mais sobre</Link>
        </p>
        <div className={styles.icons}>
          <a
            href="mailto:vitor.pro@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMail className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/vitinho.ssantos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className={styles.icon} />
          </a>
          <a
            href="https://github.com/profvitao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/vitor-silva-45b916150/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className={styles.icon} />
          </a>
        </div>
      </div>
    </>
  );
}
export default Contatos;
