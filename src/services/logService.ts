import API from "./api";

export const createLog = (data: any) => API.post("/logs", data);

export const getLogs = () => API.get("/logs");

export const getLogByDate = (date: string) => API.get(`/logs/${date}`);

export const updateLog = (id: string, data: any) =>
  API.put(`/logs/${id}`, data);

export const deleteLog = (id: string) => API.delete(`/logs/${id}`);
