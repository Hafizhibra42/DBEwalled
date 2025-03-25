import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { validateLoginForm } from "../utils/validation"; 

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleLogin = () => {
    const { errors, isValid } = validateLoginForm(email, password); 
    setErrors(errors);

    if (!isValid) return;

    if (email === "user@example.com" && password === "password") {
      router.replace("/(tabs)/dashboard");
    } else {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/walled.png")} style={styles.logo} resizeMode="contain" />

      <CustomInput placeholder="Email" value={email} onChangeText={setEmail} error={errors.email} />
      <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry error={errors.password} />

      <CustomButton title="Login" onPress={handleLogin} />

      <Text style={styles.registerText}>
        Don’t have an account?{" "}
        <Text style={styles.registerLink} onPress={() => router.push("/register")}>Register here</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff", 
    paddingHorizontal: 20 
  },
  logo: { 
    width: 200, 
    height: 200, 
    marginBottom: 40 
  },
  registerText: { 
    marginTop: 20, 
    fontSize: 14, 
    color: "#666" 
  },
  registerLink: { 
    color: "#2563eb", 
    fontWeight: "bold" 
  },
});
