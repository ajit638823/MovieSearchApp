import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MovieCard.module.css";
function MovieCard({ movie, type }) {
  const [showOpen, setShowOpen] = useState(false);
  const isMovie = "release_date" in movie && "title" in movie;

  return (
    <div
      className={styles.movie}
      onMouseEnter={() => setShowOpen(true)}
      onMouseLeave={() => setShowOpen(false)}
    >
      <img
        src={`http://image.tmdb.org/t/p/w500` + movie?.backdrop_path}
        alt="error"
      />
      <div className={styles.abs}>
        <p>{type === "movie" ? movie.title : movie.name}</p>
        {showOpen === true && (
          <button className={styles.open}>
            <NavLink to={`/showMovie/${isMovie ? "movie" : "tv"}/${movie?.id}`}>
              Open
            </NavLink>
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
