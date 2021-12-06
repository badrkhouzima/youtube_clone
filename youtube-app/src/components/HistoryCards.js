import React from "react";
import "./HistoryCards.css";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function HistoryCards({ searchedVideo, selectedHandler }) {
  const navigate = useNavigate();
  const start = moment(
    searchedVideo.snippet.searchedTime,
    "HH:mm:ss"
  ).startOf();
  const historyPlayHandler = () => {
    selectedHandler(searchedVideo);
    navigate("/watchvideo");
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
            <Moment
              date={start}
              format="h [hrs and] m [mins] s [s]•
            ago"
              durationFromNow
            />
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
