import React from "react";
import FavoriteVideo from "./FavoriteVideo";
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
      {/* <div className="FavoritesList"></div> */}
      <h2>Favorite Videos</h2>
      <div className="favoriteVideos__videos">
        {favVideos.map((vidObj, index) => {
          return (
            <FavoriteVideo
              // channelTitle={ele.snippet.title}
              // channelImage={ele.snippet.thumbnails.url}
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
