import { COLORS } from "@/src/constants/theme";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import StatCard from "../../src/components/StatCard";
import { useStats } from "../../src/hooks/useStats";

export default function Stats() {
  const { data, loading } = useStats();

  if (loading) return <ActivityIndicator size="large" />;
  if (!data.avg) {
    return <Text style={{ color: "white" }}>Pas assez de données</Text>;
  }
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 15,
      }}
    >
      <StatCard
        title="Cycle moyen"
        value={`${data.avg?.averageCycle || 0} jours`}
      />

      <StatCard
        title="Précision prédiction"
        value={`${data.acc?.accuracy || 0}%`}
      />

      <View style={{ marginTop: 10 }}>
        <Text style={{ color: "white", fontSize: 18, marginBottom: 10 }}>
          Symptômes
        </Text>

        <StatCard
          title="Douleur moyenne"
          value={`${data.symp?.avgPain || 0}/10`}
        />
        {/* 
        <StatCard
          title="Humeur dominante"
          value={data.symp?.dominantMood || "N/A"}
        /> */}
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ color: "white", fontSize: 18, marginBottom: 10 }}>
          Insights IA
        </Text>

        {data.ins?.insights?.map((item: string, index: number) => (
          <View
            key={index}
            style={{
              backgroundColor: COLORS.background,
              borderRadius: 15,
              padding: 15,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "white" }}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
