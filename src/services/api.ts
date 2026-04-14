import axios from "axios";
import { useAuthStore } from "../store/authStore";

const API = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

API.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
