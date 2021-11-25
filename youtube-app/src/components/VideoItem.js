import React from "react";
import "./VideoItem.css";
//import Avatar from "@mui/material/Avatar";
function VideoItem({
  vidObj,
  selectedHandler,
  setToggleFaveIcon,
  favorites,
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
        src={vidObj.snippet.thumbnails.medium.url !== "null" ? vidObj.snippet.thumbnails.medium.url : "http://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg" }
        alt={vidObj.snippet.description}
      />
      <div className="videoItem__Info">
        <h4>{vidObj.snippet.title}</h4>
        <h6>{vidObj.snippet.channelTitle}</h6>
        <p>{vidObj.snippet.discription}</p>
      </div>
      
      {/* <Avatar
          className="videoItem__avatar"
          alt={vidObj.snippet.channelTitle}
          src={vidObj.snippet.thumbnails.medium.url}
        /> */}
    </div>
  );
}
export default VideoItem;