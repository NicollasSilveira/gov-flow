import { router } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    // Simulação (depois vamos conectar com backend)
    setTimeout(() => {
      console.log("Login:", { email, password });
      setLoading(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
          {/* LOGO */}
          <View style={{ alignItems: "center", marginBottom: 40 }}>
            <Image
              source={require("../../assets/images/logo.jpeg")}
              style={{ width: 110, height: 110 }}
              resizeMode="contain"
            />
            <Text
              style={{
                color: colors.text,
                fontSize: 26,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              GovFlow
            </Text>
          </View>

          {/* EMAIL */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            style={{
              backgroundColor: colors.inputBg,
              color: colors.text,
              padding: 15,
              borderRadius: 12,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          />

          {/* SENHA */}
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{
              backgroundColor: colors.inputBg,
              color: colors.text,
              padding: 15,
              borderRadius: 12,
              marginBottom: 20,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          />

          {/* BOTÃO LOGIN */}
          <TouchableOpacity
            onPress={handleLogin}
            disabled={loading}
            style={{
              backgroundColor: colors.primary,
              padding: 15,
              borderRadius: 12,
              marginBottom: 15,
              alignItems: "center",
            }}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Entrar</Text>
            )}
          </TouchableOpacity>

          {/* GOOGLE (placeholder por enquanto) */}
          <TouchableOpacity
            style={{
              backgroundColor: colors.secondary,
              padding: 15,
              borderRadius: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Entrar com Google
            </Text>
          </TouchableOpacity>

          {/* CADASTRO */}
          <TouchableOpacity
            onPress={() => router.push("/auth/register")}
            style={{ marginTop: 20 }}
          >
            <Text style={{ color: "#aaa", textAlign: "center" }}>
              Não tem conta? Criar conta
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
