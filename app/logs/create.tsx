import { router } from "expo-router";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { useLogs } from "../../src/hooks/useLogs";

export default function CreateLog() {
  const { addLog } = useLogs();

  const [pain, setPain] = useState("");
  const [mood, setMood] = useState("");

  const handleSave = async () => {
    await addLog({
      date: new Date(),
      pain: Number(pain),
      mood,
    });

    router.back();
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#0f0f1a" }}>
      <TextInput
        placeholder="Pain (1-10)"
        placeholderTextColor="gray"
        style={{ color: "white", marginBottom: 10 }}
        onChangeText={setPain}
      />

      <TextInput
        placeholder="Mood"
        placeholderTextColor="gray"
        style={{ color: "white", marginBottom: 20 }}
        onChangeText={setMood}
      />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
