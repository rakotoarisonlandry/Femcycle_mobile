import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { View } from "react-native";
import { COLORS } from "../constants/theme";
import { useAuthStore } from "../store/authStore";

export default function SplashScreen() {
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (token) {
        router.replace("/(tabs)");
      } else {
        router.replace("/auth/login");
      }
    }, 2500); // durée animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        source={require("../../assets/json/logo.json")}
        autoPlay
        loop={false}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
