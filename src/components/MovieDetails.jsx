import { useState } from "react";
import Genre from "./Genre";
import styles from "./MovieDetails.module.css";
import { FcAddDatabase, FcLike } from "react-icons/fc";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

function MovieDetails({ details, type }) {
  const [fav, setFav] = useState([]);
  const [watched, setWatched] = useState([]);
  const [wish, setWish] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const inFav =
    fav.find((item) => item.type === type && item.id === details.id) !==
    undefined;
  console.log(inFav);
  const inWatch =
    watched.find((item) => item.type === type && item.id === details.id) !==
    undefined;
  const inWish =
    wish.find((item) => item.type === type && item.id === details.id) !==
    undefined;

  const addFav = () => {
    setFav((curr) => [...curr, { type: type, id: details.id }]);
    console.log(
      fav.some((item) => item.type === type && item.id === details.id)
    );
  };
  const remFav = () => {
    setFav((curr) => curr.filter((x) => x.id != details.id));
  };
  const addWatched = () => {
    setWatched((curr) => [...curr, { type: type, id: details.id }]);
  };
  const remWatched = () => {
    setWatched((curr) => curr.filter((x) => x.id != details.id));
  };
  const addWish = () => {
    setWish((curr) => [...curr, { type: type, id: details.id }]);
  };
  const remWish = () => {
    setWish((curr) => curr.filter((x) => x.id != details.id));
  };

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
                    <IoIosAddCircle size={30} color="brown" onClick={addFav} />
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
                    <IoIosAddCircle size={30} color="brown" onClick={addWish} />
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
              <Genre name={genre.name} />
            ))}
          </span>
          <span>Ratings:{details.vote_average}/10</span>
        </div>
      </div>
      <p>{details.overview}</p>
    </div>
  );
}

export default MovieDetails;

/*
database management on this page:
  fetch the 
*/
