import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";
function Login({ handleAuth }) {
  return (
    <div className={styles.login}>
      <h1>Unlimited movies, TV shows and more</h1>
      <h2>Explore anywhere,anytime.</h2>
      <div>
        <h4>Ready to explore?</h4>
        <div className={styles.loginBox}>
          <h1 onClick={handleAuth}>
            continue using Google <span className={styles.rarr}>&rarr;</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
