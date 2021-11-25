import React from "react";
import logo from "../assets/reactube_logo.png";
//import badrPic from "../assets/badr_pic.jpg";
import youtube from "../api/youtube";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import "./Header.css";

import saveSearchedVideos from "../logic/save-search-video";

const Header = ({
  setTerm,
  term,
  setVideos,
  setSearchedVideos,
  setSelectedVideo,
  favorites,
  setToggleFaveIcon,
  setShowVideoDetail,
  setShowVideoList,
  setShowTrending,
  setShowFavorites,
}) => {
  const searchHandler = (e) => {
    setTerm(e.target.value);
  };

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    fetchData();
  };

  async function fetchData() {
    const response = await youtube.get("/search", {
      params: {
        q: { term },
      },
    });
    setVideos(response.data.items);
    saveSearchedVideos(response.data.items);
    setSearchedVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);

    //console.log("term=>", term);
    setShowVideoDetail(true);
    setShowVideoList(true);
    setShowTrending(false);
    setShowFavorites(false);
    setTerm("");
    if (favorites.includes(response.data.items[0].id.videoId)) {
      setToggleFaveIcon(true);
    } else {
      setToggleFaveIcon(false);
    }
    console.log("search call");
  }

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src={logo} alt="react tube" />
      </div>
      {/* <div className="header__input"> */}
      <form onSubmit={onsubmitHandler} className="header__form">
        <input
          type="text"
          placeholder="Search"
          value={term}
          onChange={searchHandler}
        />
        <button>
          <SearchIcon className="header__inputButton" />
        </button>
      </form>
      {/* </div> */}
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

// props.submitFormHandler(term);
// setTerm("");
//const searchURL = requests.fetchSearchTerm + { termFromSearchBar };
