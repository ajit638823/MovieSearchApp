import Loader from "./Loader";
import Movie from "./Movie";
import styles from "./Results.module.css";

function Results({ movies, isLoading }) {
  return (
    <div className={styles.results}>
      {isLoading ? (
        <Loader color={"white"} />
      ) : (
        <div className={styles.searchList}>
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Results;
