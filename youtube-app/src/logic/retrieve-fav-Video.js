const retrieveFavoritesVideos = () => {
  const data = localStorage.getItem("fav-Videos");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default retrieveFavoritesVideos;

