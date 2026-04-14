import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import API from "../../src/services/api";

export default function Stats() {
  const [stats, setStats] = useState<any>({});
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    API.get("/stats/cycle-average").then((res) => setStats(res.data));
    API.get("/stats/ai/insights").then((res) => setInsights(res.data.insights));
  }, []);

  return (
    <View>
      <Text>Moyenne cycle: {stats.averageCycle}</Text>

      {insights.map((i: string, idx: number) => (
        <Text key={idx}>{i}</Text>
      ))}
    </View>
  );
}
