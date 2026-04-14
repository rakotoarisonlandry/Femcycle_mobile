import { COLORS } from "@/src/constants/theme";
import { router } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import SettingItem from "../../src/components/SettingItem";
import { useNotifications } from "../../src/hooks/useNotifications";
import { useAuthStore } from "../../src/store/authStore";

export default function Settings() {
  const { settings, update, testNotification } = useNotifications();
  const setToken = useAuthStore((state) => state.setToken);

  if (!settings) return <ActivityIndicator size="large" />;

  const toggleNotif = async () => {
    await update({ enabled: !settings.enabled });
  };

  const handleLogout = () => {
    setToken("");
    router.replace("/auth/login");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0f0f1a",
        padding: 20,
      }}
    >
      <Text style={{ color: "white", fontSize: 18, marginBottom: 15 }}>
        Notifications
      </Text>

      <SettingItem
        label="Activer les notifications"
        value={settings.enabled}
        onChange={toggleNotif}
      />

      <TouchableOpacity
        onPress={testNotification}
        style={{
          backgroundColor: COLORS.primary,
          padding: 15,
          borderRadius: 12,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Tester notification
        </Text>
      </TouchableOpacity>

      <Text style={{ color: "white", fontSize: 18, marginBottom: 15 }}>
        Compte
      </Text>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "#e74c3c",
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Se déconnecter
        </Text>
      </TouchableOpacity>
    </View>
  );
}
