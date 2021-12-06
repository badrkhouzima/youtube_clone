import React from "react";
import "./VideoDetail.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VideoList from "./VideoList";

function VideoDetails({
  favorites,
  selectedVideo,
  handleSetFavorites,
  videos,
  selectedHandler,
}) {
  window.onload = function () {
    window.location = "/";
  };
  const toggleFavorite = () => {
    handleSetFavorites(selectedVideo.id.videoId, selectedVideo);
  };

  const isAFavoriteVideo = () => {
    console.log("here", favorites);
    return favorites
      .map((ele) => {
        return ele.id.videoId === selectedVideo.id.videoId;
      })
      .includes(true);
    // return favorites.includes(selectedVideo.id.videoId);
  };
  //debugger
  const videoScr = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <>
      <div className="videodetails">
        <iframe
          className="display___iframe"
          src={videoScr}
          title="Video player"
        />
        <div className="videodetails__vidinfo">
          <h4 className="videodetails__vidtitle">
            {selectedVideo.snippet.title}
          </h4>
          <p className="embed__vidDiscrip">
            {selectedVideo.snippet.description}
          </p>
          <div className="timeAndfavorite">
            <button onClick={toggleFavorite} className="favoriteToggle">
              {isAFavoriteVideo() ? (
                <FavoriteIcon style={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </button>
          </div>
        </div>
      </div>
      <VideoList videos={videos} selectedHandler={selectedHandler} />
    </>
  );
}
export default VideoDetails;
