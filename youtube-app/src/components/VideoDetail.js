import React from "react";
import "./VideoDetail.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function VideoDetails({
  video,
  setToggleFaveIcon,
  toggleFaveIcon,
  favorites,
  handleSetFavorites,
  handleSetFavoritesVideo,
}) {
  const toggleFavorite = () => {
    setToggleFaveIcon(() => !toggleFaveIcon);
    // if (video.id.videoId === undefined) {
    //   handleSetFavorites(video.id);
    // } else {
    handleSetFavorites(video.id.videoId, video);
    //handleSetFavoritesVideo(video);
    // }
  };

  const videoScr = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="videodetails">
      <iframe
        className="display___iframe"
        src={videoScr}
        title="Video player"
      />
      <div className="videodetails__vidinfo">
        <h4 className="videodetails__vidtitle">{video.snippet.title}</h4>
        {/* <p>{video.snippet.date}</p> */}
        <p className="embed__vidDiscrip">{video.snippet.description}</p>
        
        <div className="timeAndfavorite">
          <button onClick={toggleFavorite} className="favoriteToggle">
            {!toggleFaveIcon ? (
              <FavoriteBorderIcon />
            ) : (
              <FavoriteIcon style={{ color: "red" }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default VideoDetails;