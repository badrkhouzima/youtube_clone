import React from "react";
import FavoriteVideos from "./FavoriteVideo";
import "./Favorites.css";
function Favorites({ selectedHandler, favVideos }) {
  return (
    <div className="favoriteVideos">
      <h2>Favorite Videos</h2>
      <div className="favoriteVideos__videos">
        {favVideos.map((vidObj, index) => {
          return (
            <FavoriteVideos
              key={index}
              vidObj={vidObj}
              selectedHandler={selectedHandler}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Favorites;
