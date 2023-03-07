import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8000",
});

request.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("key") || "";
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (err) => {
    console.log(err);
  }
);
export default request;
