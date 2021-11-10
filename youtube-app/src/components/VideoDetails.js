import React, { useEffect } from "react";
import "./VideoDetails.css";
import VidHolder from "./VidHolder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function VideoDetails({
  selectedVideo,
  videos,
  setToggleFaveIcon,
  toggleFaveIcon,
  favorites,
  index,
}) {
  if (!selectedVideo && videos.length === 0) {
    return <VidHolder />;
  }

  const toggleFavorite = () => {
    setToggleFaveIcon(!toggleFaveIcon);
    if (
      !toggleFaveIcon &&
      favorites.includes(afterSearchOrSelected.id.videoId)
    ) {
      return [...favorites];
    } else if (!toggleFaveIcon) {
      favorites.push(afterSearchOrSelected.id.videoId);
    } else if (toggleFaveIcon) {
      favorites.splice(index,1);
    }
  };
  const afterSearchOrSelected = selectedVideo ? selectedVideo : videos[0];
  const videoScr = `https://www.youtube.com/embed/${afterSearchOrSelected.id.videoId}`;

  return (
    <div className="videodetails">
      <iframe
        className="display___iframe"
        src={videoScr}
        title="Video player"
      />
      <div className="videodetails__vidinfo">
        <h4 className="videodetails__vidtitle">
          {afterSearchOrSelected.snippet.title}
        </h4>
        {/* <p>{afterSearchOrSelected.snippet.date}</p> */}
        <p className="embed__vidDiscrip">
          {afterSearchOrSelected.snippet.description}
        </p>
        <div className="timeAndfavorite">
          <p>timeStamp</p>
          <button onClick={toggleFavorite}>
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
