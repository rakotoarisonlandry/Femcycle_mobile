import { router } from "expo-router";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import API from "../../src/services/api";
import { useAuthStore } from "../../src/store/authStore";

export default function Login() {
  const setToken = useAuthStore((state) => state.setToken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await API.post("/auth/login", { email, password });
    setToken(res.data.accessToken);
    router.replace("/");
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
