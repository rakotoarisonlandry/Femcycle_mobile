import { COLORS } from "@/src/constants/theme";
import { router } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LogCard from "../../src/components/LogCard";
import { useLogs } from "../../src/hooks/useLogs";

export default function Logs() {
  const { logs, loading, remove } = useLogs();

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={{ flex: 1, backgroundColor: "#0f0f1a", padding: 15 }}>
      <FlatList
        data={logs}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }) => <LogCard log={item} onDelete={remove} />}
      />

      <TouchableOpacity
        onPress={() => router.push("/logs/create")}
        style={{
          position: "absolute",
          bottom: 30,
          right: 20,
          backgroundColor: COLORS.primary,
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          elevation: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 30 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
