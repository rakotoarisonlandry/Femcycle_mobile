import API from "./api";

export const invitePartner = () => API.post("/partner/invite");

export const acceptInvite = (token: string) =>
  API.post("/partner/accept", { token });

export const getPartnerStatus = () => API.get("/partner/status");

export const removePartner = () => API.delete("/partner");
