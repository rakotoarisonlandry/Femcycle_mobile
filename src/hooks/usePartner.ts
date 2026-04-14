import { useState } from "react";
import {
    getPartnerStatus,
    invitePartner,
    removePartner,
} from "../services/partnerService";

export const usePartner = () => {
  const [status, setStatus] = useState("");

  const invite = async () => {
    const res = await invitePartner();
    return res.data.inviteLink;
  };

  const loadStatus = async () => {
    const res = await getPartnerStatus();
    setStatus(res.data.status);
  };

  const remove = async () => {
    await removePartner();
    setStatus("");
  };

  return { status, invite, loadStatus, remove };
};
