import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // params: {
  //   api_key: API_KEY
  // }
}); 

export default instance;

