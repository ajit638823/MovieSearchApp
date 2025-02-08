const APIKEY = import.meta.env.VITE_TMDB_API_KEY;
const requests = {
  discoverMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&page=1&sort_by=popularity.desc`,
  discoverTV: `/discover/tv?api_key=${APIKEY}&language=en-US&page=1&sort_by=popularity.desc`,
  //   findById: `/movie/${movieId}?api_key=${APIKEY}&language=en-US`,
  nowPlayingMovies: `/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`,
  nowPlayingTv: `/tv/now_playing?api_key=${APIKEY}&language=en-US&page=1`,
  popularMovies: `/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
  popularTv: `/tv/popular?api_key=${APIKEY}&language=en-US&page=1`,
  topRatedMovies: `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
  topRatedtv: `/tv/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
  upcomingMovies: `/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`,
  upcomingtv: `/tv/upcoming?api_key=${APIKEY}&language=en-US&page=1`,
  searchByName: `/search/movie?api_key=${APIKEY}&language=en-US&query=`,
  trendingMovies: `/trending/movie/week?api_key=${APIKEY}&language=en-US`,
  trendingTv: `/trending/tv/week?api_key=${APIKEY}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&page=1&with_genres=28`,
  adventureMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&page=1&with_genres=12`,
  horrorMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&page=1&with_genres=27`,
  sifiMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&page=1&with_genres=878`,
  thrillerMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&page=1&with_genres=53`,
  warMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&page=1&with_genres=10752`,
  mysteryMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&page=1&with_genres=9648`,

  similarMovies: `/similar?api_key=${APIKEY}`,
  prompt: `recommended a single movie genre code(id) from the given data(don't write anything else)id:28,Action id:12,Adventure id:16,Animation id:35,Comedy id:80,Crime id:99,Documentary id:18,Drama id:10751,Family id:14,Fantasy id:36,History id:27,Horror id:10402,Music id:9648,Mystery id:10749,Romance id:878,Science Fiction id:10770,TV Movie id:53,Thriller id:10752,War id:37,Western, on the basis of following text : `,
};
export default requests;