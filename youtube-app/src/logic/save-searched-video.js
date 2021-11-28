const saveSearchedVideos = (video, searchedtermParam, timeParam) => {
  let existingEntriesVideo = JSON.parse(
    localStorage.getItem("searched-Videos")
  );
  if (existingEntriesVideo == null) existingEntriesVideo = [];
  video.snippet.searchedTerm = searchedtermParam;
  video.snippet.searchedTime = timeParam;
  existingEntriesVideo.push(video);
  localStorage.setItem("searched-Videos", JSON.stringify(existingEntriesVideo));
};

export default saveSearchedVideos; 
