import React from "react";
import "./VideoList.css";
import VideoItem from "./VideoItem";

export default function VideoList({ videos, selectedHandler }) {
  return (
    <div className="videoList">
      {videos.map((video, index) => {
        return (
          <VideoItem
            key={index}
            video={video}
            selectedHandler={selectedHandler}
          />
        );
      })}
    </div>
  );
}
