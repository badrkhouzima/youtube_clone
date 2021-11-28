import React from "react";
import "./HistoryCards.css";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment";
//import retrieveSearchedVideos from "../logic/retrieve-search-video"
function HistoryCards({
  searchedVideo,
  setToggleFaveIcon,
  selectedHandler,
  favorites,
  setShowVideoList,
  setShowVideoDetail,
  setShowTrending,
  setShowFavorites,
  setShowHistory,
}) {
  const start = moment();
  //.add(0, "m");
  const historyPlayHandler = () => {
    //debugger;
    selectedHandler(searchedVideo);
    setShowVideoDetail(true);
    setShowVideoList(true);
    setShowTrending(false);
    setShowFavorites(false);
    setShowHistory(false);
    if (favorites.includes(searchedVideo.id.videoId)) {
      setToggleFaveIcon(true);
    } else {
      setToggleFaveIcon(false);
    }
  };
  return (
    <div className="historyCards">
      <div className="historyCards__Cards">
        <div className="historyCards__Info">
          <img
            src={
              searchedVideo.snippet.thumbnails.medium.url !== "null"
                ? searchedVideo.snippet.thumbnails.medium.url
                : "http://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg"
            }
            alt=""
          />
          <h3>{searchedVideo.snippet.searchedTerm}</h3>

          <h3>
            <Moment date={start} format="hh:mm:ss" durationFromNow />
          </h3>
          <p> </p>
        </div>
        <div className="historyCards__Play">
          <input type="submit" value="Play" onClick={historyPlayHandler} />
        </div>
      </div>
    </div>
  );
}
export default HistoryCards;
