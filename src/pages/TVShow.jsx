import AppNav from "../components/AppNav";
import MoviesSlider from "../components/MoviesSlider";
import MovieRow from "../components/MovieRow";
function TVShow() {
  return (
    <div>
      <AppNav />
      <MoviesSlider title={"discoverTV"} />
      <section>
        {/* <MovieRow heading={"Now Playing"} type={"nowPlayingTv"} /> */}
        <MovieRow heading={"Top Rated"} type={"topRatedtv"} />
        <MovieRow heading={"Trending"} type={"trendingTv"} />
        {/* <MovieRow heading={"Upcoming"} type={"upcomingtv"} /> */}
      </section>
    </div>
  );
}

export default TVShow;
