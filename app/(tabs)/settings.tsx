import { Button, View } from "react-native";
import API from "../../src/services/api";

export default function Settings() {
  const testNotif = async () => {
    await API.post("/notifications/test");
    alert("Notification envoyée");
  };

  return (
    <View>
      <Button title="Test notification" onPress={testNotif} />
    </View>
  );
}
