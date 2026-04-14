import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/theme";

export default function LogCard({ log, onDelete }: any) {
  const getPainColor = () => {
    if (log.pain <= 3) return COLORS.safe;
    if (log.pain <= 6) return COLORS.risky;
    return COLORS.danger;
  };

  return (
    <View
      style={{
        backgroundColor: "#1a1a2e",
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
      }}
    >
      <Text style={{ color: "white", fontSize: 16 }}>
        {new Date(log.date).toLocaleDateString()}
      </Text>

      <Text style={{ color: getPainColor(), marginTop: 5 }}>
        Pain: {log.pain}
      </Text>

      <Text style={{ color: "gray" }}>Mood: {log.mood || "N/A"}</Text>

      <TouchableOpacity onPress={() => onDelete(log._id)}>
        <Text style={{ color: "red", marginTop: 10 }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
