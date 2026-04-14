import { Text, View } from "react-native";
import { COLORS } from "../constants/theme";

export default function StatCard({ title, value }: any) {
  return (
    <View
      style={{
        backgroundColor: "#1a1a2e",
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
      }}
    >
      <Text style={{ color: "gray" }}>{title}</Text>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 22,
          marginTop: 5,
        }}
      >
        {value}
      </Text>
    </View>
  );
}
