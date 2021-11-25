import youtube from "./youtube";

const fetchMyAPI = async () => {
  const response = await youtube.get("/search", {
    params: {
      chart: "mostPopular",
      maxResults: 4,
      q: "where is the money",
    },
  });
  setVideos(response.data.items);
  setSelectedVideo(response.data.items[0]);
};

export default fetchMyAPI;
