import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TrendingVideos from "./components/TrendingVideos";
import VideoDetails from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import SideBar from "./components/SideBar";
import Favorites from "./components/Favorites";
import LastSearches from "./components/LastSearches";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import retrieveFavorites from "../src/logic/retrieve-favorites";
import retrieveFavoritesVideos from "./logic/retrieve-fav-Video";
import retrieveSearchedVideos from "./logic/retrieve-search-video";

import saveFavoritesVideos from "./logic/save-fav-videos";
import saveFavorites from "./logic/save-favorites";
import findById from "./utils/find-element-in-array";
import deleteFavorite from "./utils/delete-element-in-array";
import "./components/trendingandFav.css";
import requests from "./api/Requests";

const App = () => {
  const [favorites, setFavorites] = useState(retrieveFavorites());
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [toggleFaveIcon, setToggleFaveIcon] = useState(false);
  //const [homepage, setHomepage] = useState(false);
  const [favVideos, setFavVideos] = useState(retrieveFavoritesVideos());
  const [searchedVideos, setSearchedVideos] = useState(
    retrieveSearchedVideos()
  );
  const [showVideoDetail, setShowVideoDetail] = useState(false);
  const [showVideoList, setShowVideoList] = useState(false);
  const [showTrending, setShowTrending] = useState(true);
  const [showFavorites, setShowFavorites] = useState(true);

  const [term, setTerm] = useState("");

  const url2 = requests.fetchTrending;

  async function fetchMyAPI() {
    const response = await youtube.get(url2);
    setVideos(response.data.items);
    //setSelectedVideo(response.data.items[0]);
  }
  const selectedHandler = (vidObjX) => {
    setSelectedVideo(vidObjX);
  };
  const handleSetFavorites = (id, video) => {
    if (findById(favorites, id)) {
      //logic to delete favorite in localStorage and favorite state
      deleteFavorite(id, video);
      setFavorites((prev) => [...prev, id]);
      setFavVideos((prev) => [...prev, video]);
    } else {
      //you cant save ids directly on localStorage
      setFavorites((prev) => [...prev, id]);
      saveFavorites(id);
      setFavVideos((prev) => [...prev, video]);
      saveFavoritesVideos(video);
      //console.log(favVideos);
    }
  };

  useEffect(() => {
    fetchMyAPI();
    console.log("call trending 1");
    //return () => console.log("clean it ");

    // useCallback to add fetchMyAPI as dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="app">
        <Header
          //videos={videos}
          setVideos={setVideos}
          setSelectedVideo={setSelectedVideo}
          setShowVideoDetail={setShowVideoDetail}
          setShowVideoList={setShowVideoList}
          //submitFormHandler={submitHandler}
          setShowTrending={setShowTrending}
          setShowFavorites={setShowFavorites}
          favorites={favorites}
          setToggleFaveIcon={setToggleFaveIcon}
          setSearchedVideos={setSearchedVideos}
          //selectedVideo={selectedVideo}
          term={term}
          setTerm={setTerm}
        />
        <div className="front__page">
          <SideBar
            // homepage={homepage}
            setShowVideoDetail={setShowVideoDetail}
            setShowTrending={setShowTrending}
            setShowVideoList={setShowVideoList}
            setShowFavorites={setShowFavorites}
          >
            <Routes>
              <Route exact path="/" component={TrendingVideos} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/history" component={History} />
            </Routes>
          </SideBar>
          {showVideoDetail && (
            <VideoDetails
              // className="sidebar__page"
              video={selectedVideo}
              toggleFaveIcon={toggleFaveIcon}
              setToggleFaveIcon={setToggleFaveIcon}
              favorites={favorites}
              handleSetFavorites={handleSetFavorites}
              //handleSetFavoritesVideo={handleSetFavoritesVideo}
              //handleSetFavoritesItems={handleSetFavoritesItems}
            />
          )}
          {showVideoList && (
            <VideoList
              selectedHandler={selectedHandler}
              videos={videos}
              setToggleFaveIcon={setToggleFaveIcon}
              favorites={favorites}
            />
          )}
          <div className="trending__Favorites">
            {showTrending && (
              <TrendingVideos
                selectedHandler={selectedHandler}
                videos={videos}
                setToggleFaveIcon={setToggleFaveIcon}
                favorites={favorites}
                setShowVideoDetail={setShowVideoDetail}
                setShowVideoList={setShowVideoList}
                setShowFavorites={setShowFavorites}
              />
            )}
            <div className="LastSearches__Favorites">
              {showFavorites && (
                <LastSearches searchedVideos={searchedVideos} term={term} />
              )}
              {showFavorites && (
                <Favorites
                  selectedHandler={selectedHandler}
                  setToggleFaveIcon={setToggleFaveIcon}
                  favVideos={favVideos}
                  favorites={favorites}
                  setShowTrending={setShowTrending}
                  setShowVideoDetail={setShowVideoDetail}
                  setShowFavorites={setShowFavorites}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default App;
// const relatedVideos = async ()=>{
//   const response = await youtube.get("search", {
//     params: {
//       relatedToVideoId = {},
//        type = "video"
//     },
//   });
// }
// const urlParam =
// "/search",
//   {
//     params: {
//       chart: "mostPopular",
//       maxResults: 4,
//       q: "where is the money",
//     },
//   };
