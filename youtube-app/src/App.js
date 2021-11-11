import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import VideoDetails from "./components/VideoDetails";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import SideBar from "./components/SideBar";
import Favorites from "./components/Favorites";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
//import Switch from "react-switch";

const getDatafromLS = () => {
  const data = localStorage.getItem("favorites");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const App = () => {
  const [favorites] = useState(getDatafromLS());
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [toggleFaveIcon, setToggleFaveIcon] = useState(false);
  const [index, setIndex] = useState(null);
  const submitHandler = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    setVideos(response.data.items);
  };
  const selectedHandler = (vidObjX) => {
    setSelectedVideo(vidObjX);
  };
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <Router>
      <div className="app">
        <Header submitFormHandler={submitHandler} />
        <div className="front__page">
          <SideBar>
            <Routes>
              <Route exact path="/" component={App} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/history" component={History} />
            </Routes>
          </SideBar>
          <VideoDetails
            // className="sidebar__page"
            selectedVideo={selectedVideo}
            videos={videos}
            toggleFaveIcon={toggleFaveIcon}
            setToggleFaveIcon={setToggleFaveIcon}
            favorites={favorites}
            index={index}
          />
          <VideoList
            selectedHandler={selectedHandler}
            videos={videos}
            setToggleFaveIcon={setToggleFaveIcon}
            favorites={favorites}
            setIndex={setIndex}
          />
        </div>
      </div>
    </Router>
  );
};
export default App;
