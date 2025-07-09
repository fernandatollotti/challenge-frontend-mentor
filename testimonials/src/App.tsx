import styles from "./App.module.scss";
import Card from "./components/Card";
import { testimonial } from "./data/testimonial";
import type { TestimonialProps } from "./data/testimonial";

function App() {
  const colorByIndex: { [key: string]: string } = {
    1: "purple",
    2: "gray",
    3: "white",
    4: "blue",
    5: "white",
  };

  return (
    <section className={styles.gridContainer}>
      <div className={styles.testimonials}>
        {(testimonial as TestimonialProps[]).map((item, index) => {
          const color = colorByIndex[String(index + 1)] || "white";
          return <Card {...item} key={index} color={color} />;
        })}
      </div>
      <div className={styles.attribution}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://fernandatollotti.com.br" target="_blank">
          Fernanda Tollotti
        </a>
        .
      </div>
    </section>
  );
}

export default App;
