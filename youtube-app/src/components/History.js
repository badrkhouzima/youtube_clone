import React from "react";
import "./History.css";
import HistoryCards from "./HistoryCards";

function History({
  searchedVideos,
  setToggleFaveIcon,
  selectedHandler,
  favorites,
  setShowVideoList,
  setShowVideoDetail,
  setShowTrending,
  setShowFavorites,
  setShowHistory,
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
              setToggleFaveIcon={setToggleFaveIcon}
              favorites={favorites}
              setShowVideoList={setShowVideoList}
              setShowVideoDetail={setShowVideoDetail}
              setShowTrending={setShowTrending}
              setShowFavorites={setShowFavorites}
              setShowHistory={setShowHistory}
            />
          );
        })}
      </div>
    </div>
  );
}
export default History;
