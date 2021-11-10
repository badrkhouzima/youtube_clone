import React from "react";
import "./VideoList.css";
import VideoItem from "./VideoItem";
export default function VideoList({
  videos,
  selectedHandler,
  setToggleFaveIcon,
  favorites,
  setIndex,
}) {
  // const setToggleFaveIconX = () => {
  //   setToggleFaveIcon(false);
  // };
  return (
    <div className="videoList">
      {videos.map((vidObj, index) => {
        return (
          <VideoItem
            // channelTitle={ele.snippet.title}
            // channelImage={ele.snippet.thumbnails.url}
            key={vidObj.id.vedoId}
            vidObj={vidObj}
            selectedHandler={selectedHandler}
            setToggleFaveIcon={setToggleFaveIcon}
            favorites={favorites}
            setIndex={index}
          />
        );
      })}
    </div>
  );
}
