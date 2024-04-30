import styles from "./UserInfo.module.css";
import UserLogo from "./UserLogo";
import { auth } from "../firebase";
import { useEffect } from "react";
function UserInfo() {
  useEffect(() => {
    const user = auth.currentUser;
    //console.log(user.displayName, user.photoURL);
  }, []);
  return (
    <div className={styles.info}>
      <div className={styles.about}>
        <UserLogo url={auth.currentUser?.photoURL} />
        <div>
          <h2>{auth.currentUser?.displayName}</h2>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
