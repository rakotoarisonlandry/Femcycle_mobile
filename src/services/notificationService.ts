import API from "./api";

export const getSettings = () => API.get("/notifications/settings");

export const updateSettings = (data: any) =>
  API.put("/notifications/settings", data);

export const getHistory = () => API.get("/notifications/history");

export const testNotification = () => API.post("/notifications/test");
