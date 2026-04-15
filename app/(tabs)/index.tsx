import { COLORS } from "@/src/constants/theme";
import { ActivityIndicator, Text, View } from "react-native";
import { useCycle } from "../../src/hooks/useCycle";

export default function Home() {
  const { cycle, status, loading } = useCycle();

  if (loading) return <ActivityIndicator size="large" />;

  if (!cycle) return <Text>No data</Text>;

  const getColor = () => {
    if (status === "SAFE") return COLORS.safe;
    if (status === "RISKY") return COLORS.risky;
    return COLORS.danger;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 220,
          height: 220,
          borderRadius: 110,
          borderWidth: 10,
          borderColor: getColor(),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 32 }}>J{cycle.day}</Text>
      </View>

      {/* STATUS */}
      <Text
        style={{
          color: getColor(),
          fontSize: 28,
          marginTop: 20,
        }}
      >
        {status}
      </Text>

      <Text style={{ color: "gray", marginTop: 10 }}>{cycle.phase}</Text>
    </View>
  );
}
