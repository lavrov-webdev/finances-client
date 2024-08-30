import axios from "axios";

export const appAxios = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? "http://localhost:3001"
    : "https://bbab1ktgch5jg0dbuk5v.containers.yandexcloud.net",
  withCredentials: true,
});
