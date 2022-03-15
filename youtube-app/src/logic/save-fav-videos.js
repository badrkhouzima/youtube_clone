const saveFavoritesVideos = (video) => {
  
  let existingEntriesVideo = JSON.parse(localStorage.getItem("fav-Videos"));
  if (existingEntriesVideo == null) existingEntriesVideo = [];
  existingEntriesVideo.push(video);
  localStorage.setItem("fav-Videos", JSON.stringify(existingEntriesVideo));
};

export default saveFavoritesVideos;