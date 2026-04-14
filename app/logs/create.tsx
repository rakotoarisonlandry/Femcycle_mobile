import { router } from "expo-router";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import API from "../../src/services/api";

export default function CreateLog() {
  const [pain, setPain] = useState("");

  const handleCreate = async () => {
    await API.post("/logs", {
      date: new Date(),
      pain: Number(pain),
    });

    router.back();
  };

  return (
    <View>
      <TextInput placeholder="Pain 1-10" onChangeText={setPain} />
      <Button title="Save" onPress={handleCreate} />
    </View>
  );
}
