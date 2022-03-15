import React from "react";
import { useNavigate } from "react-router-dom";
import "./VideoItem.css";
import Avatar from "@mui/material/Avatar";

function VideoItem({ video, selectedHandler }) {
  const navigate = useNavigate();
  const handleClickVideo = () => {
    selectedHandler(video);
    navigate("/watchvideo");
  };

  return (
    <div className="videoItem" onClick={handleClickVideo}>
      <img
        className="videoItem__thumbnail"
        src={
          video.snippet.thumbnails.medium.url !== "null"
            ? video.snippet.thumbnails.medium.url
            : "http://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg"
        }
        alt={video.snippet.description}
      />
      <div className="videoItem__Info">
        <Avatar
          className="videoItem__avatar"
          alt={video.snippet.channelTitle}
          src={
            video.snippet.thumbnails.medium.url !== "null"
              ? video.snippet.thumbnails.medium.url
              : "http://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg"
          }
        />
        <h4>{video.snippet.title}</h4>
      </div>
    </div>
  );
}
export default VideoItem;
