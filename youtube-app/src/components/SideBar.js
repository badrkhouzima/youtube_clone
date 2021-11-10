import React from "react";
import SidebarRow from "./SidebarRow"
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
const SideBar = () => {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={FavoriteIcon} title="Favorites" />
      <SidebarRow Icon={HistoryIcon} title="History" />
    </div>
  );
};
export default SideBar;