import axios from "axios";

const api = axios.create({
  baseURL: process.env.SERVER_API_URL,
});

export default api;
