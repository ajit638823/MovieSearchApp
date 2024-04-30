import { useEffect, useState } from "react";
import Genre from "./Genre";
import styles from "./MovieDetails.module.css";
import { FcAddDatabase, FcLike } from "react-icons/fc";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { db } from "../firebase";
import { auth } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Loader from "./Loader";
import { onAuthStateChanged } from "firebase/auth";

function MovieDetails({ details, type }) {
  const [fav, setFav] = useState([]);
  const [watched, setWatched] = useState([]);
  const [wish, setWish] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [fetching, setFetching] = useState(true);
  //fetching the users data on initial render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            console.log(user.uid);
            const favMovSnap = await getDocs(
              collection(db, `users/${user.uid}/favorite`)
            );
            const favMovData = favMovSnap.docs.map((doc) => ({
              dbId: doc.id,
              ...doc.data(),
            }));
            console.log("fetched:", favMovData);
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
            const wishlistMoviesData = wishlistMoviesSnapshot.docs.map(
              (doc) => ({
                dbId: doc.id,
                ...doc.data(),
              })
            );
            setWish(wishlistMoviesData);

            setFetching(false);
          } else {
            alert("User is not authenticated.");
          }
        });

        // Clean up
        return () => unsubscribe();
      } catch (error) {
        console.log("error fetching user data :", error);
      }
    };
    fetchData();
  }, []);

  const inFav =
    fav.find((item) => item.type === type && item.id === details.id) !==
    undefined;
  const inWatch =
    watched.find((item) => item.type === type && item.id === details.id) !==
    undefined;
  const inWish =
    wish.find((item) => item.type === type && item.id === details.id) !==
    undefined;

  // CRUD on Firestore and Local
  const addFav = async () => {
    try {
      const user = auth.currentUser?.uid;
      const docRef = await addDoc(collection(db, `users/${user}/favorite`), {
        type: type,
        id: details?.id,
      });
      setFav((curr) => [
        ...curr,
        { type: type, id: details.id, dbId: docRef.id },
      ]);
      console.log("Document written with ID: ", docRef.id);
      console.table(fav);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const remFav = async () => {
    try {
      const userUid = auth.currentUser.uid;
      const dbId = fav.find(
        (curr) => curr.id == details.id && curr.type == type
      ).dbId;
      await deleteDoc(doc(db, `users/${userUid}/favorite/${dbId}`));
      setFav((curr) => curr.filter((x) => x.id != details.id));
      console.log("Favorite deleted successfully.");
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };
  const addWatched = async () => {
    try {
      const user = auth.currentUser?.uid;
      const docRef = await addDoc(collection(db, `users/${user}/watched`), {
        type: type,
        id: details?.id,
      });
      setWatched((curr) => [
        ...curr,
        { type: type, id: details.id, dbId: docRef.id },
      ]);
      console.log("Document written with ID: ", docRef.id);
      // console.table(fav);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const remWatched = async () => {
    try {
      const userUid = auth.currentUser.uid;
      const dbId = watched.find(
        (curr) => curr.id == details.id && curr.type == type
      ).dbId;
      await deleteDoc(doc(db, `users/${userUid}/watched/${dbId}`));
      setWatched((curr) => curr.filter((x) => x.id != details.id));
      console.log("Favorite deleted successfully.");
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };
  const addWish = async () => {
    try {
      const user = auth.currentUser?.uid;
      const docRef = await addDoc(collection(db, `users/${user}/wish`), {
        type: type,
        id: details?.id,
      });
      setWish((curr) => [
        ...curr,
        { type: type, id: details.id, dbId: docRef.id },
      ]);
      console.log("Document written with ID: ", docRef.id);
      // console.table(fav);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setWish((curr) => [...curr, { type: type, id: details.id }]);
  };
  const remWish = async () => {
    try {
      const userUid = auth.currentUser.uid;
      const dbId = wish.find(
        (curr) => curr.id == details.id && curr.type == type
      ).dbId;
      await deleteDoc(doc(db, `users/${userUid}/wish/${dbId}`));
      setWish((curr) => curr.filter((x) => x.id != details.id));
      console.log("Favorite deleted successfully.");
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };

  if (!fetching) {
    return (
      <div className={styles.details}>
        <div className={styles.top}>
          <div className={styles.title}>
            <span>
              <h2 style={{ display: "inline-block" }}>
                {" "}
                {type === "movie" ? details.original_title : details.name}
              </h2>
              <span className={styles.tagline}>{details.tagline}</span>
            </span>
            <div>
              <div className={styles.options}>
                <FcAddDatabase
                  size={40}
                  onClick={() => setShowAdd((curr) => !curr)}
                  className={styles.cptr}
                  color="brown"
                />
                {inFav && <FcLike size={35} />}
              </div>
              {showAdd && (
                <div className={styles.addToList}>
                  <span className={styles.add}>
                    {!inFav ? (
                      <IoIosAddCircle
                        size={30}
                        color="brown"
                        onClick={addFav}
                      />
                    ) : (
                      <IoIosRemoveCircle
                        size={30}
                        color="brown"
                        onClick={remFav}
                      />
                    )}
                    <span>Favourites</span>
                  </span>
                  <span className={styles.add}>
                    {!inWatch ? (
                      <IoIosAddCircle
                        size={30}
                        color="brown"
                        onClick={addWatched}
                      />
                    ) : (
                      <IoIosRemoveCircle
                        size={30}
                        color="brown"
                        onClick={remWatched}
                      />
                    )}
                    <span>Watched</span>
                  </span>
                  <span className={styles.add}>
                    {!inWish ? (
                      <IoIosAddCircle
                        size={30}
                        color="brown"
                        onClick={addWish}
                      />
                    ) : (
                      <IoIosRemoveCircle
                        size={30}
                        color="brown"
                        onClick={remWish}
                      />
                    )}
                    <span>Wish List</span>
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className={styles.genreBlock}>
            <span>
              {details?.genres?.map((genre) => (
                <Genre name={genre.name} key={genre.name} />
              ))}
            </span>
            <span>Ratings:{details.vote_average}/10</span>
          </div>
        </div>
        <p>{details.overview}</p>
      </div>
    );
  } else {
    <Loader />;
  }
}

export default MovieDetails;

/*
DB structure:
  users (collection)
  |- uid (document)
     |- favoriteMovies (collection)
        |- movieId1 (document)
           |- // movie data
        |- movieId2 (document)
           |- // movie data
        |- ...
     |- watchedMovies (collection)
        |- movieId1 (document)
           |- // movie data
        |- movieId2 (document)
           |- // movie data
        |- ...
     |- wishlistMovies (collection)
        |- movieId1 (document)
           |- // movie data
        |- movieId2 (document)
           |- // movie data
        |- ...

*/
