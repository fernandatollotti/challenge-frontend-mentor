import styles from "./Card.module.scss";
import type { TestimonialProps } from "../data/testimonial";

type CardProps = TestimonialProps & { color?: string };

export default function Card({ color = "", ...props }: CardProps) {
  return (
    <article className={`${styles.card} ${styles[color ?? ""]}`}>
      <header className={styles.cardHeader}>
        <img src={props.avatar} alt={props.name} className={styles.image} />
        <div className={styles.info}>
          {props.name}
          <p className={styles.verified}>{props.verified}</p>
        </div>
      </header>
      <div className={styles.cardBody}>
        <h3>{props.title}</h3>
        <p>{props.comment}</p>
      </div>
    </article>
  );
}
