import API from "./api";

export const createCycle = (data: any) => API.post("/cycles", data);

export const getCurrentCycle = () => API.get("/cycles/current");

export const getStatus = () => API.get("/cycles/current/status");
