
const saveFavorites = (id) => {
 
  let   existingEntries = JSON.parse(localStorage.getItem("favs"));
    if (existingEntries == null) existingEntries = [];
  // localStorage.setItem("entry", JSON.stringify(id));
 
   // Save allEntries back to local storage
   existingEntries.push(id);
   localStorage.setItem("favs", JSON.stringify(existingEntries));

 
};

export default saveFavorites;
