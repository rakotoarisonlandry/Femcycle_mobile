import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import API from "../../src/services/api";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    API.get("/logs").then((res) => setLogs(res.data));
  }, []);

  return (
    <View>
      {logs.map((log: any) => (
        <Text key={log._id}>
          {log.date} - Pain: {log.pain}
        </Text>
      ))}
    </View>
  );
}
