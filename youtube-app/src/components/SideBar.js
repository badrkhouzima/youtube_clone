import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";

const SideBar = ({
  setShowVideoDetail,
  setShowTrending,
  setShowVideoList,
  setShowFavorites,
  setShowHistory,
}) => {
  const favoritesHandler = () => {
    //debugger;
    //homepage(false);
    setShowVideoDetail(false);
    setShowTrending(false);
    setShowVideoList(false);
    setShowFavorites(true);
    setShowHistory(false);
  };
  const homePageHandler = () => {
    setShowVideoList(false);
    setShowVideoDetail(false);
    setShowTrending(true);
    setShowFavorites(true);
    setShowHistory(true);
  };
  const historyHandler = () => {
    setShowVideoDetail(false);
    setShowVideoList(false);
    setShowTrending(false);
    setShowFavorites(false);
    setShowHistory(true);
  };

  return (
    <div className="sidebar">
      <Link to="/" onClick={homePageHandler}>
        <SidebarRow Icon={HomeIcon} title="Home" />
      </Link>
      <Link to="/favorites" onClick={favoritesHandler}>
        <SidebarRow Icon={FavoriteIcon} title="Favorites" />
      </Link>
      <Link to="/history" onClick={historyHandler}>
        <SidebarRow Icon={HistoryIcon} title="History" />
      </Link>
    </div>
  );
};
export default SideBar;
