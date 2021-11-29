import React from "react";
import "./FavoriteVideo.css";
import Avatar from "@mui/material/Avatar";
function FavoriteVideos({
  vidObj,
  favorites,
  selectedHandler,
  setToggleFaveIcon,
  setShowVideoDetail,
  setShowFavorites,
  setShowHistory,
  setShowTrending,
}) {
  const likeClickhandler = () => {
    setShowVideoDetail(true);
    setShowFavorites(true);
    setShowHistory(false);
    setShowTrending(false);
    selectedHandler(vidObj);
    if (favorites.includes(vidObj.id.videoId)) {
      setToggleFaveIcon(true);
    } else {
      setToggleFaveIcon(false);
    }
  };
  return (
    <div className="FavoriteVideo" onClick={likeClickhandler}>
      <img
        src={
          vidObj.snippet.thumbnails.medium.url !== "null"
            ? vidObj.snippet.thumbnails.medium.url
            : "http://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg"
        }
        alt={vidObj.snippet.description}
      />
      <div className="FavoriteVideo__Info">
        <Avatar
          className="FavoriteVideo__avatar"
          alt={vidObj.snippet.channelTitle}
          src={vidObj.snippet.thumbnails.medium.url}
        />
        <h4>{vidObj.snippet.title}</h4>
      </div>
    </div>
  );
}
export default FavoriteVideos;
