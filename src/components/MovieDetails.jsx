import Genre from "./Genre";
import styles from "./MovieDetails.module.css";

function MovieDetails({ details, type }) {
  return (
    <div className={styles.details}>
      <div className={styles.top}>
        <div>
          <h2 style={{ display: "inline-block" }}>
            {" "}
            {type === "movie" ? details.original_title : details.name}
          </h2>
          <span className={styles.tagline}>{": " + details.tagline}</span>
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
