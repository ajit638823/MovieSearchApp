import { NavLink, useSearchParams } from "react-router-dom";
import Search from "./Search";
import styles from "./AppNav.module.css";
import ProfileOptions from "./ProfileOptions";
import { useState } from "react";

function AppNav() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <ul className={styles.appNav}>
      <li>
        <NavLink to={"/homepage"}>🎬🎥</NavLink>
      </li>
      <li>
        <Search />
      </li>
      <li>
        <div className={styles.mt}>
          <NavLink to={"/movies"}>Movies</NavLink>
          <NavLink to={"/tvShows"}>TV shows</NavLink>
        </div>
      </li>

      <li>
        <div
          onClick={() => setShowOptions((curr) => !curr)}
          className={styles.profile}
        >
          Profile
        </div>
      </li>
      {showOptions && <ProfileOptions />}
    </ul>
  );
}

export default AppNav;
