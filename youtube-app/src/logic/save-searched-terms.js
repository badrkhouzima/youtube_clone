const saveSearchedTerms = (video) => {
  let existingEntriesVideo = JSON.parse(
    localStorage.getItem("searched-Terms")
  );
  if (existingEntriesVideo == null) existingEntriesVideo = [];
  existingEntriesVideo.push(video);
  localStorage.setItem("searched-Terms", JSON.stringify(existingEntriesVideo));
};

export default saveSearchedTerms;
