import API from "./api";

export const register = (data: any) => API.post("/auth/register", data);

export const login = (data: any) => API.post("/auth/login", data);

export const refreshToken = () => API.post("/auth/refresh-token");

export const logout = () => API.post("/auth/logout");

export const forgotPassword = (email: string) =>
  API.post("/auth/forgot-password", { email });

export const resetPassword = (data: any) =>
  API.post("/auth/reset-password", data);
