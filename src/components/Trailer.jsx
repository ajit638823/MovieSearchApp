import { useEffect, useState } from "react";
import Video from "./Video";
import styles from "./Trailer.module.css";

function Trailer({ videos }) {
  const [curr, setCurr] = useState(0);
  //console.log(videos);
  // console.log("hello");
  //console.log(videos?.at(curr)?.key);
  function handleNext() {
    if (curr >= videos.length - 1) return;
    setCurr((x) => x + 1);
    //console.log(curr);
  }
  function handlePrev() {
    if (curr == 0) return;
    setCurr((x) => x - 1);
    //console.log(curr);
  }

  return (
    <div className={styles.trailer}>
      <div className={styles.navigation}>
        {curr > 0 && (
          <div
            style={{ fontSize: "xx-large", cursor: "pointer" }}
            onClick={handlePrev}
            className={styles.navigate}
          >
            &larr;
          </div>
        )}
        {curr < videos.length - 1 && (
          <div
            style={{ fontSize: "xx-large", cursor: "pointer" }}
            onClick={handleNext}
            className={styles.navigate}
          >
            &rarr;
          </div>
        )}
      </div>
      {<Video id={videos?.at(curr)?.key} />}
    </div>
  );
}

export default Trailer;
