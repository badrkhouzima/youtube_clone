import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TrendingVideos from "./components/TrendingVideos";
import VideoDetails from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import SideBar from "./components/SideBar";
import Favorites from "./components/Favorites";
import { useNavigate } from "react-router-dom";
import History from "./components/History";
import { Routes, Route } from "react-router-dom";
import retrieveFavorites from "../src/logic/retrieve-favorites";
import retrieveFavoritesVideos from "./logic/retrieve-fav-Video";
///import retrieveSearchedVideos from "./logic/retrieve-search-video";
//import retrieveSearchedTerms from "./logic/retrieve-search-terms";
import saveFavoritesVideos from "./logic/save-fav-videos";
import saveFavorites from "./logic/save-favorites";
import findById from "./utils/find-element-in-array";
import deleteFavorite from "./utils/delete-element-in-array";
import "./components/trendingandFav.css";

const retrieveSearchedVideos = () => {
  const data = localStorage.getItem("searched-Videos");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const App = () => {
  const [videos, setVideos] = useState([]);
  //export default retrieveSearchedVideos;
  const [searchedVideos, setSearchedVideos] = useState(
    retrieveSearchedVideos()
  );
  //retrieveSearchedTerms()
  const [term, setTerm] = useState("");
  const [toggleFaveIcon, setToggleFaveIcon] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [favorites, setFavorites] = useState(retrieveFavorites());
  const [favVideos, setFavVideos] = useState(retrieveFavoritesVideos());
  const [showVideoDetail, setShowVideoDetail] = useState(false);
  const [showVideoList, setShowVideoList] = useState(false);
  const [showTrending, setShowTrending] = useState(true);
  const [showFavorites, setShowFavorites] = useState(true);
  const [showHistory, setShowHistory] = useState(true);

  const history = useNavigate();

  async function fetchMyAPI() {
    const response = await youtube.get("/search", {
      // part: ["snippet"],
      // forMine: true,
      // maxResults: 4,
      // q: "tech|programming -fishing",
      // type: ["video"],
      params: {
        chart: "mostPopular",
        maxResults: 4,
        q: "tech|programming -fishing",
      },
    });
    setVideos(response.data.items);
    //setSelectedVideo(response.data.items[0]);
  }
  const selectedHandler = (itemSelected) => {
    setSelectedVideo(itemSelected);
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
    }
  };

  useEffect(() => {
    fetchMyAPI();
    //return () => console.log("clean it ");
    // useCallback to add fetchMyAPI as dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    retrieveSearchedVideos();
  }, [term]);
  useEffect(() => {
    history("/");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Header
        term={term}
        setTerm={setTerm}
        setVideos={setVideos}
        setSelectedVideo={setSelectedVideo}
        setSearchedVideos={setSearchedVideos}
        setShowVideoDetail={setShowVideoDetail}
        setShowVideoList={setShowVideoList}
        setShowTrending={setShowTrending}
        setShowFavorites={setShowFavorites}
        setShowHistory={setShowHistory}
      />
      <div className="front__page">
        <SideBar
          setShowVideoDetail={setShowVideoDetail}
          setShowVideoList={setShowVideoList}
          setShowTrending={setShowTrending}
          setShowFavorites={setShowFavorites}
          setShowHistory={setShowHistory}
        >
          <Routes>
            <Route exact path="/" component={TrendingVideos} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/history" component={History} />
          </Routes>
        </SideBar>
        {showVideoDetail && (
          <VideoDetails
            video={selectedVideo}
            favorites={favorites}
            toggleFaveIcon={toggleFaveIcon}
            setToggleFaveIcon={setToggleFaveIcon}
            handleSetFavorites={handleSetFavorites}
            selectedVideo={selectedVideo}
          />
        )}
        {showVideoList && (
          <VideoList
            videos={videos}
            favorites={favorites}
            selectedHandler={selectedHandler}
            setToggleFaveIcon={setToggleFaveIcon}
          />
        )}
        <div className="trending__FavoritesHistoy">
          {showTrending && (
            <TrendingVideos
              videos={videos}
              favorites={favorites}
              selectedHandler={selectedHandler}
              setToggleFaveIcon={setToggleFaveIcon}
              setShowVideoDetail={setShowVideoDetail}
              setShowVideoList={setShowVideoList}
              setShowTrending={setShowTrending}
              setShowFavorites={setShowFavorites}
              setShowHistory={setShowHistory}
            />
          )}
          <div className="historyFavorites__Wrapper">
            {showHistory && (
              <History
                searchedVideos={searchedVideos}
                term={term}
                setShowFavorites={setShowFavorites}
                selectedHandler={selectedHandler}
                setToggleFaveIcon={setToggleFaveIcon}
                favorites={favorites}
                setShowVideoList={setShowVideoList}
                setShowVideoDetail={setShowVideoDetail}
                setShowTrending={setShowTrending}
                setShowHistory={setShowHistory}
              />
            )}
            {showFavorites && (
              <Favorites
                selectedHandler={selectedHandler}
                setToggleFaveIcon={setToggleFaveIcon}
                favVideos={favVideos}
                favorites={favorites}
                setShowVideoList={setShowVideoList}
                setShowTrending={setShowTrending}
                setShowVideoDetail={setShowVideoDetail}
                setShowFavorites={setShowFavorites}
                setShowHistory={setShowHistory}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
