import { COLORS } from "@/src/constants/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import API from "../../src/services/api";
import { useAuthStore } from "../../src/store/authStore";

export default function Login() {
  const setToken = useAuthStore((state) => state.setToken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await API.post("/auth/login", { email, password });
      setToken(res.data.accessToken);
      router.replace("/");
    } catch (err: any) {
      setError(
        err?.response?.data?.error || "Email ou mot de passe incorrect.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.inner}>
        <View style={styles.brandWrap}>
          <LottieView
            source={require("../../assets/json/logo.json")}
            autoPlay
            loop={true}
            style={{ width: 150, height: 150 }}
          />
          <Text style={styles.brandName}>FemCycle</Text>
          <Text style={styles.tagline}>
            Ton cycle, compris automatiquement.
          </Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Connexion</Text>

          {/* Email */}
          <View style={styles.fieldWrap}>
            <Text style={styles.fieldLabel}>Adresse e-mail</Text>
            <View
              style={[
                styles.inputWrap,
                emailFocused && styles.inputWrapFocused,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="exemple@mail.com"
                placeholderTextColor={COLORS.text + "44"}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(v) => {
                  setEmail(v);
                  setError("");
                }}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </View>
          </View>

          {/* Password */}
          <View style={styles.fieldWrap}>
            <Text style={styles.fieldLabel}>Mot de passe</Text>
            <View
              style={[
                styles.inputWrap,
                passwordFocused && styles.inputWrapFocused,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={COLORS.text + "44"}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(v) => {
                  setPassword(v);
                  setError("");
                }}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Text style={styles.eyeIcon}>
                  {showPassword ? (
                    <AntDesign
                      name="eye-invisible"
                      size={20}
                      color={COLORS.primary}
                    />
                  ) : (
                    <AntDesign name="eye" size={20} color={COLORS.primary} />
                  )}
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Error */}
          {error ? (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          {/* Forgot password */}
          <Pressable style={styles.forgotWrap}>
            <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
          </Pressable>

          {/* Login button */}
          <Pressable
            style={({ pressed }) => [
              styles.btn,
              pressed && styles.btnPressed,
              loading && styles.btnLoading,
            ]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Text style={styles.btnText}>Se connecter</Text>
            )}
          </Pressable>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Register link */}
          <Pressable
            style={styles.registerWrap}
            onPress={() => router.push("/auth/register")}
          >
            <Text style={styles.registerText}>
              Pas encore de compte ?{" "}
              <Text style={styles.registerLink}>Créer un compte</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  orbTop: {
    position: "absolute",
    top: -80,
    right: -60,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: COLORS.primary,
    opacity: 0.18,
  },
  orbBottom: {
    position: "absolute",
    bottom: -100,
    left: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: COLORS.primary,
    opacity: 0.12,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  /* Brand */
  brandWrap: {
    alignItems: "center",
    marginBottom: 36,
  },
  logoRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  logoInner: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.primary,
    opacity: 0.85,
  },
  brandName: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
    letterSpacing: 1,
    marginBottom: 4,
  },
  tagline: {
    fontSize: 13,
    color: COLORS.text + "66",
    letterSpacing: 0.3,
  },

  /* Card */
  card: {
    backgroundColor: "#ffffff0d",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.primary + "33",
    padding: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 24,
  },

  /* Fields */
  fieldWrap: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: COLORS.text + "88",
    marginBottom: 8,
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff0a",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ffffff18",
    paddingHorizontal: 14,
    height: 52,
    gap: 10,
  },
  inputWrapFocused: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary + "12",
  },
  inputIcon: {
    fontSize: 15,
    opacity: 0.6,
  },
  input: {
    flex: 1,
    color: COLORS.text,
    fontSize: 15,
    paddingVertical: 0,
  },
  eyeIcon: {
    fontSize: 16,
    opacity: 0.6,
  },

  /* Error */
  errorBox: {
    backgroundColor: COLORS.danger + "20",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.danger + "55",
    padding: 10,
    marginBottom: 12,
  },
  errorText: {
    color: COLORS.danger,
    fontSize: 13,
    textAlign: "center",
  },

  /* Forgot */
  forgotWrap: {
    alignItems: "flex-end",
    marginBottom: 24,
    marginTop: -4,
  },
  forgotText: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: "500",
  },

  /* Button */
  btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  btnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  btnLoading: {
    opacity: 0.75,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  /* Divider */
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    gap: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ffffff18",
  },
  dividerText: {
    color: COLORS.text + "44",
    fontSize: 13,
  },

  /* Register */
  registerWrap: {
    alignItems: "center",
  },
  registerText: {
    fontSize: 14,
    color: COLORS.text + "66",
  },
  registerLink: {
    color: COLORS.primary,
    fontWeight: "600",
  },
});
