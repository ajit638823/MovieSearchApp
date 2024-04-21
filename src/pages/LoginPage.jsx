import Login from "../components/Login";
import styles from "./LoginPage.module.css";
import BGI from "../../public/loginBg.jpg";
import Open from "../components/Open";
import Loader from "../components/Loader";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

import { useEffect, useState } from "react";
function LoginPage() {
  const [{ wait, sucess }, setWaiting] = useState({
    wait: false,
    sucess: false,
  });

  const handleAuth = async () => {
    setWaiting((curr) => ({ ...curr, wait: true }));
    try {
      const res = await signInWithPopup(auth, provider);

      setWaiting((curr) => ({ ...curr, sucess: true }));
    } catch (e) {
      //console.log(e);
    } finally {
      setWaiting((curr) => ({ ...curr, wait: false }));
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setWaiting({ wait: false, sucess: true });
      }
      // else {
      //   // User is signed out
      //   // ...
      // }
    });
  }, []);

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
