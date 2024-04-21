import { NavLink } from "react-router-dom";
import styles from "./ProfileOptions.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
function ProfileOptions() {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("signed Out");
    } catch (e) {
      console.log(e);
    } finally {
      navigate("/loginPage");
    }
  };
  return (
    <div className={styles.options}>
      <NavLink to={"/userPage"} className={styles.ctx}>
        Open Profile
      </NavLink>
      <div className={styles.ctx}>
        <span onClick={handleSignOut}>Log Out</span>
      </div>
    </div>
  );
}

export default ProfileOptions;
