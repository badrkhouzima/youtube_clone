import React from "react";
import "./VideoList.css";
import VideoItem from "./VideoItem";
function VideoList({ videos, selectedHandler, firstVidOfTheList }) {
// const firstVidOfTheListX = () => {
  
// };

  
  return (
    <div className="sidebar">
      {videos.map((vidObj, index) => {
       
        return (
          <VideoItem
            // channelTitle={ele.snippet.title}
            // channelImage={ele.snippet.thumbnails.url}
            vidObj={vidObj}
            selectedHandler={selectedHandler}
          
          />
        );
      })}
    </div>
  );
}

export default VideoList;
