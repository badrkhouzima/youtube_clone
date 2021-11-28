import React from "react";
import FavoriteVideos from "./FavoriteVideo";
import "./Favorites.css"
function Favorites({
  selectedHandler,
  setToggleFaveIcon,
  favVideos,
  favorites,
  setShowTrending,
  setShowVideoDetail,
  setShowFavorites,
}) {
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
              setToggleFaveIcon={setToggleFaveIcon}
              favorites={favorites}
              setShowTrending={setShowTrending}
              setShowVideoDetail={setShowVideoDetail}
              setShowFavorites={setShowFavorites}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Favorites;
