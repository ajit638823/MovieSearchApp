import AppNav from "../components/AppNav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import axios from "../axios";
import ImageScroll from "../components/ImageScroll";
import Trailer from "../components/Trailer";
import styles from "./ShowMoviePage.module.css";
import Loader from "../components/Loader";
import requests from "../request";
import MovieRow from "../components/MovieRow";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const APIKEY = `1163e084f02e88f1718172d0524243e7`;

function ShowMoviePage() {
  const { id, type } = useParams();

  //console.log(id, type);

  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const findById = `/${type}/${id}?api_key=${APIKEY}&append_to_response=videos&language=en-US`;
  useEffect(() => {
    setLoading(true);
    async function fetchDetails() {
      try {
        const res = await axios.get(findById);
        setDetails(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        //console.log(details);
      }
    }
    fetchDetails();
  }, [id]);

  if (!loading) {
    const fetchSimilarLink = `/${type}/${id}` + requests.similarMovies;
    return (
      <>
        <AppNav />
        <div className={styles.page}>
          <section className={styles.details}>
            <Trailer videos={details.videos?.results} />
            <MovieDetails details={details} type={type} />
          </section>
          <ImageScroll images={details?.production_companies} />
        </div>
        <MovieRow heading={"Similar Movies"} url={fetchSimilarLink} />
      </>
    );
  } else {
    //console.log("loading");
    return (
      <div>
        <AppNav />
        <div className={styles.loadingDiv}>
          <Loader color={"black"} />
        </div>
      </div>
    );
  }
}

export default ShowMoviePage;
