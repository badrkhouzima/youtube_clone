import React from "react";
import "./History.css";
import HistoryCards from "./HistoryCards";

function History({
  searchedVideos,
  selectedHandler,
}) {
  return (
    <div className="history">
      <h2>Last Searches</h2>
      <div className="history__Cards">
        {searchedVideos.map((searchedVideo, index) => {
          return (
            <HistoryCards
              key={index}
              searchedVideo={searchedVideo}
              selectedHandler={selectedHandler}     
            />
          );
        })}
      </div>
    </div>
  );
}
export default History;
