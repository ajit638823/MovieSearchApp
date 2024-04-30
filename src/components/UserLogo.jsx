import styles from "./UserLogo.module.css";
function UserLogo({ url }) {
  return <img src={url} className={styles.img}></img>;
}

export default UserLogo;
