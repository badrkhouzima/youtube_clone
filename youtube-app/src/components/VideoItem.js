import React from "react";
import "./VideoItem.css";
import Avatar from "@mui/material/Avatar";

function VideoItem({ vidObj, selectedHandler }) {
  //   const selecledHandler = (vidObj) => {
  //       selecedHandler;
  //   };
  const selectedHandlerX = () => {
    selectedHandler(vidObj);
  };
  return (
    <div className="videoItem">
      {/* <img className="videoCard__thumbnail" src={} alt="" /> */}
      <div className="videoItem__info" onClick={selectedHandlerX}>
        <img
          src={vidObj.snippet.thumbnails.medium.url}
          alt={vidObj.snippet.description}
        />
        <Avatar
          className="videoItem__avatar"
          alt={vidObj.snippet.channelTitle}
          src={vidObj.snippet.thumbnails.medium.url}
        />
        <div className="video__text">
          <h4>{vidObj.snippet.channelTitle}</h4>
          {/* <p></p>
          <p>
            {}•{}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
