import { useEffect, useState } from "react";
import {
    getAccuracy,
    getCycleAverage,
    getInsights,
    getSymptoms,
} from "../services/statsService";

export const useStats = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getCycleAverage(),
      getSymptoms(),
      getAccuracy(),
      getInsights(),
    ]).then(([avg, symp, acc, ins]) => {
      setData({
        avg: avg.data,
        symp: symp.data,
        acc: acc.data,
        ins: ins.data,
      });
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
