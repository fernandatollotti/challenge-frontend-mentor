import type { ServicesProps } from "../../data/services/types";
import styles from "./styles.module.scss";

export default function Card(props: ServicesProps) {
  return (
    <div className={`${styles.card} ${styles.cardItem}`}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <img src={props.icon} alt={props.alt} className={styles.icon} />
    </div>
  );
}
