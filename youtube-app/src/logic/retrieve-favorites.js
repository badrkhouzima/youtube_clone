const retrieveFavorites = () => {

  const data = localStorage.getItem("favs");
  
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default retrieveFavorites