import React from "react";
import FavoriteVideos from "./FavoriteVideo";
import "./Favorites.css";
function Favorites({
  selectedHandler,
  setToggleFaveIcon,
  favVideos,
  favorites,
  setShowVideoDetail,
  setShowVideoList,
  setShowTrending,
  setShowFavorites,
  setShowHistory,
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
export default Favorites;
