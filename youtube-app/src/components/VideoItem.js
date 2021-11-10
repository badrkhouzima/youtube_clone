import React from "react";
import "./VideoItem.css";
//import Avatar from "@mui/material/Avatar";
function VideoItem({
  vidObj,
  selectedHandler,
  setToggleFaveIcon,
  favorites,
  index,
}) {
  const likeClickhandler = () => {
    selectedHandler(vidObj);
    if (favorites.includes(vidObj.id.videoId)) {
      setToggleFaveIcon(true);
    } else {
      setToggleFaveIcon(false);
    }
  };
  return (
    <div className="videoItem" onClick={likeClickhandler}>
      <img
        className="videoItem__thumbnail"
        src={vidObj.snippet.thumbnails.medium.url}
        alt={vidObj.snippet.description}
      />
      <div className="videoItem__Info">
        <h4>{vidObj.snippet.title}</h4>
        <h6>{vidObj.snippet.channelTitle}</h6>
      </div>
    </div>
  );
}
export default VideoItem;
{
  /* <Avatar
          className="videoItem__avatar"
          alt={vidObj.snippet.channelTitle}
          src={vidObj.snippet.thumbnails.medium.url}
        /> */
}
