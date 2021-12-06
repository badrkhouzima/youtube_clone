import React from "react";
import VideoItem from "./VideoItem";
import "./TrendingVideos.css";
import History from "./History"
import Favorites from "./Favorites"
function TrendingVideos({
  videos,
  selectedHandler,
  handleGoToVideoDetail,
  searchedVideos,
  term,
  favVideos,
}) {
  const handleSelectVideoAndGoToDetail = (video) => {
    selectedHandler(video);
    handleGoToVideoDetail();
  };

  return (
    <div className="home__Page">
      <div className="trendingVideos">
        <h2>Trending videos</h2>
        <div className="trendingVideos__videos">
          {videos.map((video, index) => {
            return (
              <VideoItem
                key={index}
                video={video}
                selectedHandler={handleSelectVideoAndGoToDetail}
              />
            );
          })}
        </div>
      </div>
      <div className="frontPage__HistoryFavorites">
        <History
          searchedVideos={searchedVideos}
          term={term}
          favVideos={favVideos}
          selectedHandler={selectedHandler}
        />
        <Favorites
          searchedVideos={searchedVideos}
          term={term}
          favVideos={favVideos}
          selectedHandler={selectedHandler}
        />
      </div>
    </div>
  );
}
export default TrendingVideos;
