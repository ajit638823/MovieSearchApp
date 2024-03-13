import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Search from "./components/Search";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import TVShow from "./pages/TVShow";
import Movies from "./pages/Movies";
import Homepage from "./pages/Homepage";
import Login from "./components/Login";
import ShowMoviePage from "./pages/ShowMoviePage";

import Trailer from "./components/Trailer";
//<MovieRow heading={"Now Playing"} type={"nowPlaying"} />
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="loginPage" element={<LoginPage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tvShows" element={<TVShow />} />
        <Route path="userPage" element={<UserPage />} />
        <Route path="login" element={<Login />} />
        <Route path="showMovie/:type/:id" element={<ShowMoviePage />} />

        <Route path="*" element={<p>Page not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
