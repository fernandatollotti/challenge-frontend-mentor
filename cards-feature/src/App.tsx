import styles from "./App.module.scss";
import Card from "./components/Card";
import { services } from "./data/services/services";

function App() {
  return (
    <>
      <section className={`${styles.services} ${styles.container}`}>
        <div className={styles.intro}>
          <h2>
            <span className={styles.lightText}>
              Reliable, efficient delivery
            </span>
            Powered by Technology
          </h2>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className={styles.cardContainer}>
          {services.map((service) => (
            <Card key={service.title} {...service} />
          ))}
        </div>
      </section>
      <footer className={styles.footer}>
        <p className={styles.attribution}>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://fernandatollotti.com.br">Fernanda Tollotti</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
