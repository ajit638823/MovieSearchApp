import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import styles from "./Chat.module.css";
import requests from "../request";
import axios from "axios";
import Loader from "./Loader";
import MovieRow from "./MovieRow";
function Chat() {
  const [query, setQuery] = useState("");
  const [disable, setDisable] = useState(false);
  const [genreId, setGenreId] = useState(null);
  const [loadingGenre, setLoadingGenre] = useState(false);
  const geminiKey = `AIzaSyCYReKvDdclir8B0RzAyS1YVj0O7LuGCDI`;
  const movieFetchUrl = `https://api.themoviedb.org/3/discover/movie?api_key=1163e084f02e88f1718172d0524243e7&with_genres=`;

  async function fetchGenere() {
    setLoadingGenre(true);
    try {
      const res = await axios({
        method: "post",
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiKey}`,
        data: {
          contents: [{ parts: [{ text: `${requests.prompt + query}` }] }],
        },
      });
      const gen = res["data"]["candidates"][0]["content"]["parts"][0]["text"];
      setGenreId(gen.slice(0, gen.length - 2));
      console.log(gen.slice(0, gen.length - 2));
    } catch (e) {
      console.log("error occured :", e);
    } finally {
      setLoadingGenre(false);
      setQuery("");
    }
  }

  return (
    <div className={styles.box}>
      {loadingGenre ? (
        <>
          <Loader color={"white"} />
          <h4>Analyzing the Prompt</h4>
        </>
      ) : genreId ? (
        <>
          <h4 style={{ position: "fixed" }}>Recommended</h4>
          <div className={styles.results}>
            <MovieRow heading={""} url={movieFetchUrl + genreId} />
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder={"Enter Your Prompt"}
            className={styles.inp}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            disabled={disable}
          ></input>
          <AiOutlineSend
            size={40}
            style={{ cursor: "pointer" }}
            onClick={fetchGenere}
          />
        </>
      )}
    </div>
  );
}

export default Chat;
