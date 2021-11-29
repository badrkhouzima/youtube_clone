import React from "react";
import "./VideoCard.css";
import Avatar from "@mui/material/Avatar";

function VideoCard({
  vidObj,
  selectedHandler,
  setToggleFaveIcon,
  favorites,
  setHomepage,
  setShowVideoDetail,
  setShowVideoList,
  setShowTrending,
  setShowFavorites,
  setShowHistory,
}) {
  const likeClickhandler = () => {
    setShowVideoDetail(true);
    setShowVideoList(false);
    setShowFavorites(false);
    //setShowTrending(false);
    setShowHistory(false);

    selectedHandler(vidObj);
    //setHomepage(true);
    if (favorites.includes(vidObj.id.videoId)) {
      setToggleFaveIcon(true);
    } else {
      setToggleFaveIcon(false);
    }
  };
  return (
    <div className="videoCard" onClick={likeClickhandler}>
      <img
        className="videoCard__thumbnail"
        src={
          vidObj.snippet.thumbnails.medium.url !== "null"
            ? vidObj.snippet.thumbnails.medium.url
            : "http://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg"
        }
        alt={vidObj.snippet.description}
      />

      <div className="videoCard__Info">
        <Avatar
          className="videoItem__avatar"
          alt={vidObj.snippet.channelTitle}
          src={
            vidObj.snippet.thumbnails.medium.url !== "null"
              ? vidObj.snippet.thumbnails.medium.url
              : "http://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg"
          }
        />
        <h4>{vidObj.snippet.title}</h4>
        <h6>{vidObj.snippet.channelTitle}</h6>
      </div>
    </div>
  );
}
export default VideoCard;
