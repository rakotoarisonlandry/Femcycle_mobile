import { useEffect, useState } from "react";
import { createLog, deleteLog, getLogs } from "../services/logService";

export const useLogs = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const res = await getLogs();
    setLogs(res.data);
    setLoading(false);
  };

  const addLog = async (data: any) => {
    await createLog(data);
    load();
  };

  const remove = async (id: string) => {
    await deleteLog(id);
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return { logs, loading, addLog, remove, reload: load };
};
