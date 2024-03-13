import { useEffect, useState } from "react";
import Results from "./Results";
import axios from "../axios";
import requests from "../request";
import styles from "./Search.module.css";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClose = () => {
    setQuery("");
    setLoading(false);
  };

  useEffect(() => {
    async function fetchQuery() {
      if (query === "") return;
      setLoading(true);
      try {
        console.log(requests.searchByName + query);
        const res = await axios.get(requests.searchByName + query);
        console.log(res.data.results);
        setResults(res.data.results);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }
    fetchQuery();
  }, [query]);
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.inp}
      />
      {query !== "" && <span onClick={handleClose}>&#10060; </span>}

      {query !== "" && <Results movies={results} isLoading={loading} />}
    </div>
  );
}

export default Search;
