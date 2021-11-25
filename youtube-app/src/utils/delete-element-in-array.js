
const deleteElementInArray = (ele, video) => {
  //debugger
  let existingEntries = JSON.parse(localStorage.getItem("favs"));
  const indexOfArray = existingEntries.indexOf(ele);
   existingEntries.splice(indexOfArray, 1);
   localStorage.setItem("favs", JSON.stringify(existingEntries));
   
  let existingEntriesVideo = JSON.parse(localStorage.getItem("fav-Videos"));
  //const indexOfArray = existingEntries.indexOf(ele);
   existingEntriesVideo.splice(indexOfArray, 1);
   localStorage.setItem("fav-Videos", JSON.stringify(existingEntriesVideo));
   
  //localStorage.removeItem("favorites", id);
};;
export default deleteElementInArray;