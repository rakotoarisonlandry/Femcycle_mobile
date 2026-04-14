import { useEffect, useState } from "react";
import {
    getSettings,
    testNotification,
    updateSettings,
} from "../services/notificationService";

export const useNotifications = () => {
  const [settings, setSettings] = useState<any>({});

  const load = async () => {
    const res = await getSettings();
    setSettings(res.data);
  };

  const update = async (data: any) => {
    await updateSettings(data);
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return { settings, update, testNotification };
};
