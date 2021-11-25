import React from "react";
import "./LastSearches.css";
import SearchesCards from "./SearchesCards";

function LastSearches({ searchedVideos }) {
  return (
    <div className="LastSearches">
      <h2>Last Searches</h2>
      {console.log("this one=>",searchedVideos)}
      {searchedVideos.map((card) => {
        return <SearchesCards cardVideo={card} />;
      })}
    </div>
  );
}
export default LastSearches;
