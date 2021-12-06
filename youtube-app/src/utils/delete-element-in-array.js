const deleteElementInArray = (id) => {
  let existingEntriesVideo = JSON.parse(localStorage.getItem("fav-Videos"));
  console.log("check", existingEntriesVideo);
  // existingEntriesVideo.filter(ele =>)
  const indexOfArray = existingEntriesVideo.indexOf(id);
  existingEntriesVideo.splice(indexOfArray, 1);
  localStorage.setItem("fav-Videos", JSON.stringify(existingEntriesVideo));
};
export default deleteElementInArray;
