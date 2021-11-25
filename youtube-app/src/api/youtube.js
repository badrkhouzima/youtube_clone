import axios from "axios";
const KEY = process.env.REACT_APP_API_KEY;
//console.log('KEY', KEY);
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 4,
    key: KEY,
  },
});
//AIzaSyAc4PKGqKz80JVy924qSoa_4Dnq76tJnd4
//AIzaSyBWoAbHMRfq23BOIFPSZRn6QiZEnrOcHbA
 