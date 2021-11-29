import React from "react";
import VideoCard from "./VideoCard";
import "./TrendingVideos.css";
function TrendingVideos({
  videos,
  selectedHandler,
  setToggleFaveIcon,
  favorites,
  setShowVideoDetail,
  setShowVideoList,
  setShowFavorites,
  setShowTrending,
  setShowHistory,
}) {
  return (
    <div className="trendingVideos">
      <h2>Trending videos</h2>
      <div className="trendingVideos__videos">
        {videos.map((vidObj, index) => {
          return (
            <VideoCard
              key={index}
              vidObj={vidObj}
              selectedHandler={selectedHandler}
              setToggleFaveIcon={setToggleFaveIcon}
              favorites={favorites}
              setShowVideoDetail={setShowVideoDetail}
              setShowVideoList={setShowVideoList}
              setShowFavorites={setShowFavorites}
              setShowTrending={setShowTrending}
              setShowHistory={setShowHistory}
            />
          );
        })}
      </div>
    </div>
  );
}
export default TrendingVideos;
