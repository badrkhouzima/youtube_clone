import React from "react";
import SidebarRow from "./SidebarRow";
import "./SideBar.css";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";

const SideBar = ({ setShowVideoDetail }) => {
  const homeHandler =()=>{
    setShowVideoDetail(false);
  }
  const favoritesHandler = () => {
    setShowVideoDetail(false);
  };
  const historyHandler = () => {
    setShowVideoDetail(false);
  };

  return (
    <>
      <div className="sidebar">
        <Link to="/" onClick={homeHandler}>
          <SidebarRow Icon={HomeIcon} title="Home" />
        </Link>
        <Link to="/favorites" onClick={favoritesHandler}>
          <SidebarRow
            Icon={FavoriteIcon}
            onClick={favoritesHandler}
            title="Favorites"
          />
        </Link>
        <Link to="/history" onClick={historyHandler}>
          <SidebarRow Icon={HistoryIcon} title="History" />
        </Link>
      </div>
    </>
  );
};
export default SideBar;
