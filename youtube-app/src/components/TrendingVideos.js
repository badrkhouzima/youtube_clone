import React from "react";
import VideoCard from "./VideoCard";
import "./TrendingVideos.css";
function TrendingVideos({
  videos,
  selectedHandler,
  setToggleFaveIcon,
  favorites,
  //setHomepage,
  setShowVideoDetail,
  setShowVideoList,
  setShowFavorites,
}) {
  return (
    <div className="trendingVideos">
      <h2>Trending videos</h2>
      <div className="trendingVideos__videos">
        {videos.map((vidObj, index) => {
          return (
            <VideoCard
              // channelTitle={ele.snippet.title}
              // channelImage={ele.snippet.thumbnails.url}
              key={index}
              vidObj={vidObj}
              selectedHandler={selectedHandler}
              setToggleFaveIcon={setToggleFaveIcon}
              favorites={favorites}
              //setHomepage={setHomepage}
              setShowVideoDetail={setShowVideoDetail}
              setShowVideoList={setShowVideoList}
              setShowFavorites={setShowFavorites}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TrendingVideos;
