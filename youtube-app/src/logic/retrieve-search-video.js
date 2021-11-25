const retrieveSearchedVideos = () => {
  const data = (localStorage.getItem("searched-Videos"));

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default retrieveSearchedVideos;
