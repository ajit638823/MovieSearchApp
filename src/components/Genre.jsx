import styles from "./Genre.module.css";
function Genre({ name }) {
  return <div className={styles.genre}>{name}</div>;
}

export default Genre;
