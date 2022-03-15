import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TrendingVideos from "./components/TrendingVideos";
import VideoDetails from "./components/VideoDetail";
import SideBar from "./components/SideBar";
import Favorites from "./components/Favorites";
import History from "./components/History";
import youtube from "./api/youtube";
import retrieveFavoritesVideos from "./logic/retrieve-fav-Video";
import retrieveSearchedVideos from "./logic/retrieve-search-video";
import saveFavoritesVideos from "./logic/save-fav-videos";
import saveSearchedVideos from "./logic/save-searched-video";
import findById from "./utils/find-element-in-array";
import deleteFavorite from "./utils/delete-element-in-array";
import "moment-timezone";
import moment from "moment";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [searchedVideos, setSearchedVideos] = useState(
    retrieveSearchedVideos()
  );
  const [term, setTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [favVideos, setFavVideos] = useState(retrieveFavoritesVideos());

  async function retrieveVideos(query) {
    const response = await youtube.get("/search", {
      params: {
        chart: "mostPopular",
        maxResults: 4,
        q: query,
      },
    });
    setVideos(response.data.items);
    return response.data.items;
  }
  const handleGoToVideoDetail = () => {
    setTerm("");
  };
  const handleSetSearchedVideos = (videosSearched) => {
    const searchTime = moment().format("HH:mm:ss");

    saveSearchedVideos(videosSearched[0], term, searchTime);

    const searchDataObject = videosSearched[0];

    searchDataObject.searchedTerm = term;
    searchDataObject.searchedTime = searchTime;

    setSearchedVideos((prev) => [searchDataObject, ...prev]);
    setSelectedVideo(videosSearched[0]);
  };

  const selectedHandler = (itemSelected) => {
    setSelectedVideo(itemSelected);
  };

  const handleSetFavorites = (id, video) => {
    if (findById(favVideos, id)) {
      //logic to delete favorite in localStorage and favorite state
      deleteFavorite(id);
      setFavVideos(retrieveFavoritesVideos());
    } else {
      //you cant save ids directly on localStorage
      setFavVideos((prev) => [...prev, video]);
      saveFavoritesVideos(video);
    }
  };

  useEffect(() => {
    retrieveVideos("tech|programming -fishing");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="app">
        <Header
          term={term}
          setTerm={setTerm}
          setVideos={setVideos}
          handleRetrieveVideo={retrieveVideos}
          handleSetSearchedVideos={handleSetSearchedVideos}
          handleGoToVideoDetail={handleGoToVideoDetail}
        />
        <div className="front__Page">
          <SideBar />
          <Routes>
            <Route
              path="/"
              element={
                <TrendingVideos
                  className="Trending"
                  videos={videos}
                  selectedHandler={selectedHandler}
                  handleGoToVideoDetail={handleGoToVideoDetail}
                  searchedVideos={searchedVideos}
                  term={term}
                  favVideos={favVideos}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  selectedHandler={selectedHandler}
                  favVideos={favVideos}
                />
              }
            />
            <Route
              path="/history"
              element={
                <History
                  searchedVideos={searchedVideos}
                  term={term}
                  selectedHandler={selectedHandler}
                />
              }
            />
            <Route
              path="/watchvideo"
              element={
                <VideoDetails
                  favorites={favVideos}
                  handleSetFavorites={handleSetFavorites}
                  selectedVideo={selectedVideo}
                  videos={videos}
                  selectedHandler={selectedHandler}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default App;
