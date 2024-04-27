import { useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import { useState } from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieRow.module.css";
function MovieRow({ heading, type, url }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //console.log(url);
  const link = url ? url : requests[type];
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await axios.get(link);
        //console.log(res);
        setMovies(res.data.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
        // console.log(movies);
      }
    }
    fetchMovies();
  }, []);
  if (!isLoading) {
    return (
      <div className={styles.row}>
        <h3>{heading}</h3>
        <div className={styles.movies}>
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              type={
                "release_date" in movie && "title" in movie ? "movie" : "tv"
              }
              key={movie.title}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieRow;
