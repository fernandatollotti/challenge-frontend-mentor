import styles from "./App.module.scss";
import Card from "./components/Card";
import { services } from "./data/services/services";

function App() {
  return (
    <section className={`${styles.services} ${styles.container}`}>
      <div className={styles.intro}>
        <h2>
          <span className={styles.lightText}>Reliable, efficient delivery</span>
          Powered by Technology
        </h2>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className={styles.cardContainer}>
        {services.map((service) => (
          <Card key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

export default App;
