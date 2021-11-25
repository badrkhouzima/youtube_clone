const saveSearchedVideos = (video) => {
  let existingEntriesVideo = JSON.parse(
    localStorage.getItem("searched-Videos")
  );
  if (existingEntriesVideo == null) existingEntriesVideo = [];
  existingEntriesVideo.push(video);
  localStorage.setItem("searched-Videos", JSON.stringify(existingEntriesVideo));
};

export default saveSearchedVideos;
