import { NavLink } from "react-router-dom";
import styles from "./ProfileOptions.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
function ProfileOptions() {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  return (
    <div className={styles.options}>
      <NavLink to={"/userPage"} className={styles.ctx}>
        Open Profile
      </NavLink>
      <NavLink to={"/loginPage"} className={styles.ctx}>
        <span onClick={handleSignOut}>Log Out</span>
      </NavLink>
    </div>
  );
}

export default ProfileOptions;
