import axios from "axios";
const KEY = "AIzaSyAc4PKGqKz80JVy924qSoa_4Dnq76tJnd4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
