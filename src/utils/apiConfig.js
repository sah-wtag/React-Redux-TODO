import isLocal from "./isLocal";

const BASE_URL = isLocal
  ? "http://localhost:9000"
  : "https://6a69a852b2789286ad70cd80.mockapi.io"; // swap in your real prod URL

export default BASE_URL;