import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <SidebarRow Icon={HomeIcon} title="Home" />
      </Link>
      <Link to="/favorites">
        <SidebarRow Icon={FavoriteIcon} title="Favorites" />
      </Link>
      <Link to="/history">
        <SidebarRow Icon={HistoryIcon} title="History" />
      </Link>
    </div>
  );
};
export default SideBar;
