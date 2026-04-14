import { COLORS } from "@/src/constants/theme";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import PartnerCard from "../../src/components/PartnerCard";
import { usePartner } from "../../src/hooks/usePartner";

export default function Partner() {
  const { status, invite, loadStatus, remove } = usePartner();

  const handleInvite = async () => {
    const link = await invite();
    Alert.alert("Lien d'invitation", link);
  };

  const handleStatus = async () => {
    await loadStatus();
  };

  const handleRemove = async () => {
    Alert.alert("Confirmation", "Supprimer le partenaire ?", [
      { text: "Annuler" },
      { text: "Oui", onPress: remove },
    ]);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
      }}
    >
      {/* STATUS */}
      <PartnerCard title="Statut du jour" value={status || "Non disponible"} />

      {/* ACTIONS */}
      <TouchableOpacity
        onPress={handleInvite}
        style={{
          backgroundColor: COLORS.primary,
          padding: 15,
          borderRadius: 12,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Inviter un partenaire
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleStatus}
        style={{
          backgroundColor: "#1a1a2e",
          padding: 15,
          borderRadius: 12,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Rafraîchir statut
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleRemove}
        style={{
          backgroundColor: "#e74c3c",
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Supprimer partenaire
        </Text>
      </TouchableOpacity>
    </View>
  );
}
