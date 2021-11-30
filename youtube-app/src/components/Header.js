import React from "react";
import logo from "../assets/reactube_logo.png";
import youtube from "../api/youtube";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import "moment-timezone";
import moment from "moment";
import saveSearchedVideos from "../logic/save-searched-video";
//import saveSearchedTerms from "../logic/save-searched-terms";
//import retrieveSearchedVideos from "../logic/retrieve-search-video";
const Header = ({
  term,
  setTerm,
  setVideos,
  setSelectedVideo,
  setShowVideoDetail,
  setShowVideoList,
  setShowTrending,
  setShowFavorites,
  setShowHistory,
  setSearchedVideos,
}) => {
  const searchHandler = (e) => {
    setTerm(e.target.value);
  };
  const onsubmitHandler = async (e) => {
    e.preventDefault();
    if (term.length >= 1) {
      fetchData();
    }
  };
  async function fetchData() {
    const response = await youtube.get("/search", {
      params: {
        q: { term },
      },
    });
    setVideos(response.data.items);
    const searchTime = moment().format("HH:mm:ss");
    saveSearchedVideos(response.data.items[0], term, searchTime);
    const searchDataObject = response.data.items[0];
    searchDataObject.searchedTerm = term;
    searchDataObject.searchedTime = searchTime;
    setSearchedVideos((prev) => [searchDataObject, ...prev]);
    setSelectedVideo(response.data.items[0]);
    //saveSearchedTerms(term);
    setShowVideoDetail(true);
    setShowVideoList(true);
    setShowTrending(false);
    setShowFavorites(false);
    setShowHistory(false);
    setTerm("");
  }
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src={logo} alt="react tube" />
      </div>
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
