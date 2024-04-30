import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./SavedList.module.css";
import { NavLink } from "react-router-dom";
import { GiClown } from "react-icons/gi";

const APIKEY = `1163e084f02e88f1718172d0524243e7`;
function SavedList({ list }) {
  const [details, setDetails] = useState([]);
  const [fetching, setFetching] = useState(true);
  const findById = `?api_key=${APIKEY}&language=en-US`;
  const base = "https://image.tmdb.org/t/p/w500";
  async function fetchDetails(id, type) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${APIKEY}&language=en-US`
    );
    //console.log(res.data);
    return res.data;
  }

  useEffect(() => {
    const findAll = async () => {
      const res = await Promise.all(
        list.map((curr) => fetchDetails(curr.id, curr.type))
      );
      setDetails(res);
      //console.log(res);
      setFetching(false);
    };
    findAll();
  }, [list]);

  if (fetching) {
    return <span>Loading ...</span>;
  } else {
    console.log(details);
    return (
      <div className={styles.list}>
        {details.length != 0 ? (
          details.map((curr, i) => (
            <div className={styles.item}>
              <img src={base + curr.backdrop_path} />
              <p>
                {list[i]?.type === "movie" ? curr.title : curr.original_name}
              </p>
              <NavLink
                style={{ backgroundColor: "inherit" }}
                to={`/showMovie/${list[i]?.type}/${list[i]?.id}`}
              >
                <FaArrowRightLong size={40} color="black" />
              </NavLink>
            </div>
          ))
        ) : (
          <>
            <h3>Empty</h3>
            <GiClown size={50} color="brown" />
          </>
        )}
      </div>
    );
  }
}

export default SavedList;
