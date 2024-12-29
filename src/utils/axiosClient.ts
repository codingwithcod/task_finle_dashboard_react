import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
});
