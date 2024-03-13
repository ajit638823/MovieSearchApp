import { useState } from "react";
import styles from "./Movie.module.css";
import { NavLink } from "react-router-dom";

function Movie({ movie }) {
  const [showOpen, setShowOpen] = useState(false);
  const style = {
    backgroundImage: `url(http://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
  };

  return (
    <div
      style={style}
      className={styles.movie}
      onMouseEnter={() => setShowOpen(true)}
      onMouseLeave={() => setShowOpen(false)}
    >
      <div className={styles.title}>{movie.title}</div>
      {showOpen === true && (
        <button className={style.open}>
          <NavLink to={`/showMovie/movie/${movie?.id}`}>Open</NavLink>
        </button>
      )}
    </div>
  );
}

export default Movie;
