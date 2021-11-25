import React from "react";
import "./FavoriteVideo.css";
import Avatar from "@mui/material/Avatar";
function VideoItem({
  vidObj,
  selectedHandler,
  setToggleFaveIcon,
  favorites,
  setShowVideoDetail,
  setShowFavorites,
}) {
  const likeClickhandler = () => {
    // debugger;
    setShowVideoDetail(true);
    setShowFavorites(false);
    selectedHandler(vidObj);
    if (favorites.includes(vidObj.id.videoId)) {
      setToggleFaveIcon(true);
    } else {
      setToggleFaveIcon(false);
    }
  };
  return (
    <div className="FavoriteVideo" onClick={likeClickhandler}>
      {/* <img
        className="FavoriteVideo__thumbnail"
        src={vidObj.snippet.thumbnails.medium.url}
        alt={vidObj.snippet.description}
      /> */}

      {vidObj.snippet.thumbnails.medium.url !== "null" ? (
        <img
          src={vidObj.snippet.thumbnails.medium.url}
          alt={vidObj.snippet.description}
        />
      ) : (
        <img
          src="http://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg"
          alt="place holder"
        />
      )}
      <div className="FavoriteVideo__Info">
        <Avatar
          className="FavoriteVideo__avatar"
          alt={vidObj.snippet.channelTitle}
          src={vidObj.snippet.thumbnails.medium.url}
        />
        <h4>{vidObj.snippet.title}</h4>
        {/* <h6>{vidObj.snippet.channelTitle}</h6> */}
        {/* <p>{vidObj.snippet.discription}</p> */}
      </div>
    </div>
  );
}
export default VideoItem;
