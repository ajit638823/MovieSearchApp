import AppNav from "../components/AppNav";
import MoviesSlider from "../components/MoviesSlider";
import MovieRow from "../components/MovieRow";
function Homepage() {
  return (
    <div>
      <AppNav />
      <MoviesSlider title={"trendingMovies"} />
      <section>
        <MovieRow heading={"Discover Movies"} type={"discoverMovies"} />
        <MovieRow heading={"Trending Movies"} type={"trendingMovies"} />
        <MovieRow heading={"Discover TV"} type={"discoverTV"} />
        <MovieRow heading={"Trending TV Shows"} type={"trendingTv"} />
      </section>
    </div>
  );
}

export default Homepage;
