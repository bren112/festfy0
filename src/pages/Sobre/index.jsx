import styles from "./Sobre.module.css";
import avatar from "./images/eu.jpeg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

function Sobre() {
  return (
    <section>
      <div className={styles.sobremim}>
        <img src={avatar} alt="Minha imagem" />
        <div className={styles.descricao}>
          <h2>Sobre</h2>
          <p>
            Sou <span>Vitor Silva</span>
          </p>
          <strong>Dev Full Stack</strong>
          <br />
          <br />
          <p>Trabalho com desenvolvimento web desde 2015.</p>
          <br />
          <p>Sou apaixonado por transformar ideias em realidade digital.</p>

          <br />
          <p>
            Especializado em criação de aplicações dinâmicas e intuitivas, com
            foco na experiência do usuário.
          </p>
        </div>
      </div>
      <div className={styles.tecnologias}>
        <h2>Techs</h2>
        <div className={styles.icons}>
          <FaHtml5 className={styles.icon} />
          <FaCss3Alt className={styles.icon} />
          <IoLogoJavascript className={styles.icon} />
          <FaReact className={styles.icon} />
          <FaJava className={styles.icon} />
          <SiSpring className={styles.icon} />
          <PiFileSql className={styles.icon} />
        </div>
      </div>
    </section>
  );
}
export default Sobre;
