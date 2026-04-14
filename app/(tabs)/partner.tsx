import { useState } from "react";
import { Button, Text, View } from "react-native";
import API from "../../src/services/api";

export default function Partner() {
  const [status, setStatus] = useState("");

  const invite = async () => {
    const res = await API.post("/partner/invite");
    alert(res.data.inviteLink);
  };

  const getStatus = async () => {
    const res = await API.get("/partner/status");
    setStatus(res.data.status);
  };

  return (
    <View>
      <Button title="Inviter partenaire" onPress={invite} />
      <Button title="Voir statut" onPress={getStatus} />
      <Text>{status}</Text>
    </View>
  );
}
