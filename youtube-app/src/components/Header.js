import React, { useState } from "react";
import logo from "../assets/reactube_logo.png";
//import badrPic from "../assets/badr_pic.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import "./Header.css";

const Header = (props) => {
  const [term, setTerm] = useState("");
  const searchHandler = (e) => {
    setTerm(e.target.value);
  };
  const onsubmitHandler = (e) => {
    e.preventDefault();
    props.submitFormHandler(term);
  };

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src={logo} alt="" />
      </div>
      {/* <div className="header__input"> */}
        <form onSubmit={onsubmitHandler} className="header__form">
          <input type="text" placeholder="Search" onChange={searchHandler} />
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
