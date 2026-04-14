import { Switch, Text, View } from "react-native";
import { COLORS } from "../constants/theme";

export default function SettingItem({ label, value, onChange }: any) {
  return (
    <View
      style={{
        backgroundColor: "#1a1a2e",
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        thumbColor={COLORS.primary}
      />
    </View>
  );
}
