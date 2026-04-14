import axios from "axios";

const API = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

API.interceptors.request.use((config) => {
  const token = global.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
