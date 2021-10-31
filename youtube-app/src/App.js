import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import DisplayFrame from "./components/DisplayFrame";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
const App = () => {
  //const [term, setTerm] = useState("");
  // const [video, setVideo] = useState("");
  const [videos, setVideos] = useState([]);
  const [selecedVideo, setSelecedVideo] = useState(null);
  
  
  const submitHandler = async (termFromSearchBar) => {
    
    console.log(termFromSearchBar);
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    setVideos(response.data.items);
    console.log("response.data.items=>", response.data.items);
  };

  // debugger
  const selectedHandler = (vidObj) => {
    setSelecedVideo(vidObj);
  };
 
  return (
    <div className="app">
      <Header submitFormHandler={submitHandler}/>
      <div className="sidebar__page">
        <DisplayFrame
          className="sidebar__page"
          selecedVideo={selecedVideo}
          
          videos={videos}
        />
        <VideoList
          selectedHandler={selectedHandler}
          videos={videos}
         
        />
      </div>
    </div>
  );
};

export default App;
