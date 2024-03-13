import styles from "./Loader.module.css";
function Loader({ color }) {
  const style = { borderTop: `3px solid ${color}` };
  return (
    <div className={styles.load}>
      <span class={styles.loader} style={style}></span>
    </div>
  );
}

export default Loader;
