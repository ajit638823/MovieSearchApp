import { NavLink } from "react-router-dom";
import styles from "./Open.module.css";
function Open() {
  return (
    <div className={styles.open}>
      <h1>Welcome Onboard</h1>
      <h2>Explore</h2>
      <div>
        <NavLink to={"/movies"} className={styles.ctx}>
          <p>Movies &rarr;</p>
        </NavLink>
        <NavLink to={"tvShows"} className={styles.ctx}>
          <p>Tv Shows &rarr;</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Open;
