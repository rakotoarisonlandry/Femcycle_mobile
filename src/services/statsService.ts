import API from "./api";

export const getCycleAverage = () => API.get("/stats/cycle-average");

export const getSymptoms = () => API.get("/stats/symptoms");

export const getAccuracy = () => API.get("/stats/accuracy");

export const getInsights = () => API.get("/stats/ai/insights");
