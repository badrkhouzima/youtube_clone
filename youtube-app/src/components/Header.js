import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/reactube_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
const Header = ({
  term,
  setTerm,
  handleRetrieveVideo,
  handleSetSearchedVideos,
  handleGoToVideoDetail,
}) => {
  const searchHandler = (value) => {
    setTerm(value);
  };

  async function searchVideosByTerm() {
    const videos = await handleRetrieveVideo(term);
    handleSetSearchedVideos(videos);
    handleGoToVideoDetail();
  }

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    if (term.length >= 1) {
      searchVideosByTerm();
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img className="header__logo" src={logo} alt="react tube" />
        </Link>
      </div>
      <form onSubmit={onsubmitHandler} className="header__form">
        <input
          type="text"
          placeholder="Search"
          value={term}
          onChange={(e) => searchHandler(e.target.value)}
        />
        <button>
          <SearchIcon className="header__inputButton" />
        </button>
      </form>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          src="https://avatars.githubusercontent.com/padreno"
          alt="badr khouzima's face"
        />
      </div>
    </div>
  );
};
export default Header;
