import axios from "axios";

export const appAxios = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/api"
      : "/api",
  withCredentials: true,
});
