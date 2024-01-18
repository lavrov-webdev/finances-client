import axios from "axios";
export const appAxios = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:3001"
    : "https://bbab1ktgch5jg0dbuk5v.containers.yandexcloud.net",
  withCredentials: true,
});
