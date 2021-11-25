import React from "react";
import "./SearchesCards.css";
function SearchesCards({ cardVideo, term }) {
  return (
    <div className="LastSearches">
      <div className="LastSearches__Cards">
        <div className="LastSearches__Info">
          {/* <img
            src={
              cardVideo.snippet.thumbnails.medium.url !== "null"
                ? cardVideo.snippet.thumbnails.medium.url
                : "http://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg"
            }
            alt=""
          /> */}
          {console.log("selected from lastsearch", cardVideo)}
          <h3>{term}</h3>
          <p>A minute ago</p>
        </div>
        <div className="LastSearches__Play">
          <input type="submit" value="Play" />
        </div>
      </div>
    </div>
  );
}

export default SearchesCards;
