import axios from "axios";

const instance = axios.create({
  baseURL: " http://localhost:5001/challenge-101d5/us-central1/api",
  // 'http://localhost:5001/clone-c18a0/us-central1/api'
  // http://localhost:5001/challenge-101d5/us-central1/api.
});

export default instance;
