import { Link } from "react-router-dom";
import styles from "./Home.module.css";
function Home() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Olá, sou
            <br />
            <span>Vitor Silva</span>
            <br />
            Dev Full Stack
          </p>

          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
            Saiba mais sobre mim
          </Link>
        </div>
        <figure>
          <img
            className={styles.img}
            src="/developer-blue.svg"
            alt="imagem de home"
          />
        </figure>
      </section>
    </>
  );
}
export default Home;
