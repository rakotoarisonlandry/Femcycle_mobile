import { useEffect, useState } from "react";
import { getCurrentCycle, getStatus } from "../services/cycleService";

export const useCycle = () => {
  const [cycle, setCycle] = useState<any>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setLoading(true);

      const [cycleRes, statusRes] = await Promise.all([
        getCurrentCycle(),
        getStatus(),
      ]);

      setCycle(cycleRes.data);
      setStatus(statusRes.data.status);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { cycle, status, loading, error, reload: load };
};
