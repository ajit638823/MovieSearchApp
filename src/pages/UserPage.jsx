import styles from "./UserPage.module.css";
import AppNav from "../components/AppNav";
import UserInfo from "../components/UserInfo";
import UserSaved from "../components/UserSaved";
import { db, auth } from "../firebase";
import { collection, getDocs, doc } from "firebase/firestore";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
function UserPage() {
  const [fav, setFav] = useState([]);
  const [wish, setWish] = useState([]);
  const [watched, setWatched] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          const favMovSnap = await getDocs(
            collection(db, `users/${user.uid}/favorite`)
          );
          const favMovData = favMovSnap.docs.map((doc) => ({
            dbId: doc.id,
            ...doc.data(),
          }));
          setFav(favMovData);

          const watchedMovSnap = await getDocs(
            collection(db, `users/${user.uid}/watched`)
          );
          const watchedMovData = watchedMovSnap.docs.map((doc) => ({
            dbId: doc.id,
            ...doc.data(),
          }));
          setWatched(watchedMovData);

          const wishlistMoviesSnapshot = await getDocs(
            collection(db, `users/${user.uid}/wish`)
          );
          const wishlistMoviesData = wishlistMoviesSnapshot.docs.map((doc) => ({
            dbId: doc.id,
            ...doc.data(),
          }));
          setWish(wishlistMoviesData);

          setFetching(false);
        } else {
          alert("user not logged in");
        }
      });
      setFetching(false);
      return () => unsubscribe;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      <AppNav />
      <main className={styles.main}>
        <UserInfo />
        {!fetching && <UserSaved fav={fav} wish={wish} watched={watched} />}
      </main>
    </div>
  );
}

export default UserPage;
