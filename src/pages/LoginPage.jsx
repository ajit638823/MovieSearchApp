import Login from "../components/Login";
import styles from "./LoginPage.module.css";
import BGI from "../../public/loginBg.jpg";
import Open from "../components/Open";
import Loader from "../components/Loader";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useState } from "react";
function LoginPage() {
  const [{ wait, sucess }, setWaiting] = useState({
    wait: false,
    sucess: false,
  });

  const handleAuth = async () => {
    setWaiting((curr) => ({ ...curr, wait: true }));
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      setWaiting((curr) => ({ ...curr, sucess: true }));
    } catch (e) {
      console.log(e);
    } finally {
      setWaiting((curr) => ({ ...curr, wait: false }));
      console.log(waiting);
    }
  };
  return (
    <div className={styles.loginPage}>
      <img src={BGI} className={styles.overlay} />

      {!wait ? (
        sucess ? (
          <Open />
        ) : (
          <Login handleAuth={handleAuth} />
        )
      ) : (
        <Loader color={"white"} />
      )}
    </div>
  );
}
export default LoginPage;
