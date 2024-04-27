import AppNav from "../components/AppNav";
import MoviesSlider from "../components/MoviesSlider";
import MovieRow from "../components/MovieRow";
function Movies() {
  return (
    <div>
      <AppNav />
      <MoviesSlider title={"discoverMovies"} />
      <section>
        <MovieRow heading={"Now Playing"} type={"nowPlayingMovies"} />
        <MovieRow heading={"Top Rated"} type={"topRatedMovies"} />
        <MovieRow heading={"Upcoming"} type={"upcomingMovies"} />
        <MovieRow heading={"Trending"} type={"trendingMovies"} />
        <MovieRow heading={"Si-Fi"} type={"sifiMovies"} />
        <MovieRow heading={"Action"} type={"actionMovies"} />
        <MovieRow heading={"Horror"} type={"horrorMovies"} />
        <MovieRow heading={"Adventure"} type={"adventureMovies"} />
        <MovieRow heading={"Mystery"} type={"mysteryMovies"} />
        <MovieRow heading={"War"} type={"warMovies"} />
        <MovieRow heading={"Thriller"} type={"thrillerMovies"} />
      </section>
    </div>
  );
}

export default Movies;
