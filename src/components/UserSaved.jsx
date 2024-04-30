import { useState } from "react";
import styles from "./UserSaved.module.css";
import SavedList from "./SavedList";
import { MdOutlineFavorite } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaGift } from "react-icons/fa6";
function UserSaved({ fav, watched, wish }) {
  const [{ showFav, showWish, showWatched }, setShow] = useState({
    showFav: true,
    showWish: false,
    showWatched: false,
  });
  const setFav = () => {
    setShow((curr) => ({ showFav: true, showWish: false, showWatched: false }));
  };
  const setWatched = () => {
    setShow((curr) => ({ showFav: false, showWish: false, showWatched: true }));
  };
  const setWish = () => {
    setShow((curr) => ({ showFav: false, showWish: true, showWatched: false }));
  };
  return (
    <div className={styles.userData}>
      <div className={styles.navigate}>
        <div
          onClick={setFav}
          className={`${styles.option} ${showFav ? styles.active : ""}`}
        >
          <span> Favorites</span> <MdOutlineFavorite size={40} />
        </div>
        <div
          onClick={setWatched}
          className={`${styles.option} ${showWatched ? styles.active : ""}`}
        >
          <span> Watched</span> <BiSolidMoviePlay size={40} />
        </div>
        <div
          onClick={setWish}
          className={`${styles.option} ${showWish ? styles.active : ""}`}
        >
          <span>WishList</span> <FaGift size={35} />
        </div>
      </div>
      <SavedList list={showWish ? wish : showWatched ? watched : fav} />
    </div>
  );
}

export default UserSaved;
