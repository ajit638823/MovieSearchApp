import { NavLink, useSearchParams } from "react-router-dom";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import Search from "./Search";
import styles from "./AppNav.module.css";
import ProfileOptions from "./ProfileOptions";
import { useState } from "react";
import Chat from "./Chat";

function AppNav() {
  const [showOptions, setShowOptions] = useState(false);
  const [showChat, setShowChat] = useState(false);
  return (
    <ul className={styles.appNav}>
      <li>
        <NavLink to={"/homepage"}>🎬🎥</NavLink>
      </li>
      <li className={styles.search}>
        <li>
          <Search />
        </li>

        {/* <li>
          <BsFillChatSquareTextFill
            size={25}
            onClick={() => setShowChat((curr) => !curr)}
            style={{ cursor: "pointer" }}
          />
          AI
          {showChat && <Chat />}
        </li> */}
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
