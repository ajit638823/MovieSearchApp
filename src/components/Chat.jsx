import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import styles from "./Chat.module.css";
import requests from "../request";
import axios from "axios";
import Loader from "./Loader";
function Chat() {
  const [query, setQuery] = useState("");
  const [disable, setDisable] = useState(false);
  const [genreId, setGenreId] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const geminiKey = `AIzaSyCYReKvDdclir8B0RzAyS1YVj0O7LuGCDI`;

  async function fetchGenere() {
    setWaiting(true);
    try {
      const res = await axios({
        method: "post",
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiKey}`,
        data: {
          contents: [{ parts: [{ text: `${requests.prompt + query}` }] }],
        },
      });
      const gen = res["data"]["candidates"][0]["content"]["parts"][0]["text"];
      console.log(gen.length, gen);
    } catch (e) {
      console.log("error occured :", e);
    } finally {
      setWaiting(false);
      setQuery("");
    }
  }

  return (
    <div className={styles.box}>
      {waiting ? (
        <Loader color={"white"} />
      ) : (
        <>
          <input
            type="text"
            placeholder={"enter a Prompt"}
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
