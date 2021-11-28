import React from "react";
import "./VideoList.css";
import VideoItem from "./VideoItem";
export default function VideoList({
  videos,
  selectedHandler,
  setToggleFaveIcon,
  favorites,
}) {
  // const setToggleFaveIconX = () => {
  //   setToggleFaveIcon(false);
  // };
  return (
    <div className="videoList">
      {videos.map((vidObj, index) => {
        return (
          <VideoItem
            key={index}
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
