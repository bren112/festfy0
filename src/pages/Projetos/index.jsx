import styles from "./Projetos.module.css";

import Card from "../../components/Card";
import { useEffect, useState } from "react";

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(
        "https://api.github.com/users/profvitao/repos?page=1&per_page=50"
      );

      const data = await response.json();

      setRepositories(data);
    };

    buscarRepositorios();
  }, []);

  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      <section className={styles.lista}>
        {repositories.map((projeto) => {
          return (
            <Card
              key={projeto.id}
              name={projeto.name}
              description={projeto.description}
              html_url={projeto.html_url}
            />
          );
        })}
      </section>
    </section>
  );
}
export default Projetos;
