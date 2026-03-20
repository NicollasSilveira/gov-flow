import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    cep: "",
    address1: "",
    address2: "",
    number: "",
    neighborhood: "",
    city: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      return "Preencha todos os campos obrigatórios.";
    }

    if (form.password.length < 6) {
      return "A senha deve ter no mínimo 6 caracteres.";
    }

    if (form.password !== form.confirmPassword) {
      return "As senhas não coincidem.";
    }

    return null;
  };

  const handleRegister = () => {
    const err = validate();
    if (err) return setError(err);

    setError("");
    setLoading(true);

    setTimeout(() => {
      console.log(form);
      setLoading(false);
      router.push("/auth/login");
    }, 1500);
  };

  const inputStyle = {
    backgroundColor: colors.inputBg,
    color: colors.text,
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flex: 1,
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          {/* LOGO */}
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Image
              source={require("../../assets/images/logo.jpeg")}
              style={{ width: 90, height: 90 }}
            />
            <Text
              style={{
                color: colors.text,
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Criar Conta
            </Text>
          </View>

          {error ? (
            <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
          ) : null}

          {/* NOME */}
          <TextInput
            placeholder="Nome completo"
            placeholderTextColor="#888"
            value={form.name}
            onChangeText={(v) => handleChange("name", v)}
            style={inputStyle}
          />

          {/* EMAIL + CPF */}
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#888"
              value={form.email}
              onChangeText={(v) => handleChange("email", v)}
              style={inputStyle}
            />
            <TextInput
              placeholder="CPF"
              placeholderTextColor="#888"
              value={form.cpf}
              onChangeText={(v) => handleChange("cpf", v)}
              style={inputStyle}
            />
          </View>

          {/* TELEFONE */}
          <TextInput
            placeholder="Telefone"
            placeholderTextColor="#888"
            value={form.phone}
            onChangeText={(v) => handleChange("phone", v)}
            style={inputStyle}
          />

          {/* CEP + NÚMERO */}
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TextInput
              placeholder="CEP"
              placeholderTextColor="#888"
              value={form.cep}
              onChangeText={(v) => handleChange("cep", v)}
              style={inputStyle}
            />
            <TextInput
              placeholder="Número"
              placeholderTextColor="#888"
              value={form.number}
              onChangeText={(v) => handleChange("number", v)}
              style={inputStyle}
            />
          </View>

          {/* ENDEREÇO */}
          <TextInput
            placeholder="Endereço"
            placeholderTextColor="#888"
            value={form.address1}
            onChangeText={(v) => handleChange("address1", v)}
            style={inputStyle}
          />

          <TextInput
            placeholder="Complemento"
            placeholderTextColor="#888"
            value={form.address2}
            onChangeText={(v) => handleChange("address2", v)}
            style={inputStyle}
          />

          {/* BAIRRO + CIDADE */}
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TextInput
              placeholder="Bairro"
              placeholderTextColor="#888"
              value={form.neighborhood}
              onChangeText={(v) => handleChange("neighborhood", v)}
              style={inputStyle}
            />
            <TextInput
              placeholder="Cidade"
              placeholderTextColor="#888"
              value={form.city}
              onChangeText={(v) => handleChange("city", v)}
              style={inputStyle}
            />
          </View>

          {/* SENHAS */}
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#888"
              secureTextEntry
              value={form.password}
              onChangeText={(v) => handleChange("password", v)}
              style={inputStyle}
            />
            <TextInput
              placeholder="Confirmar"
              placeholderTextColor="#888"
              secureTextEntry
              value={form.confirmPassword}
              onChangeText={(v) => handleChange("confirmPassword", v)}
              style={inputStyle}
            />
          </View>

          {/* BOTÃO */}
          <TouchableOpacity
            onPress={handleRegister}
            style={{
              backgroundColor: colors.primary,
              padding: 15,
              borderRadius: 12,
              alignItems: "center",
              marginTop: 10,
            }}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Criar conta
              </Text>
            )}
          </TouchableOpacity>

          {/* VOLTAR */}
          <TouchableOpacity onPress={() => router.push("/auth/login")}>
            <Text style={{ color: "#aaa", textAlign: "center", marginTop: 15 }}>
              Já tem conta? Entrar
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
