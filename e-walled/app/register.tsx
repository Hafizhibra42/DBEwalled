import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { validateRegisterForm } from "../utils/validation"; 

const RegisterScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [errors, setErrors] = useState({ fullname: "", email: "", password: "" });

  useEffect(() => {
    if (params.acceptedTerms === "true") {
      setAcceptedTerms(true);
    }
  }, [params]);

  const handleRegister = () => {
    const { errors, isValid } = validateRegisterForm(fullname, email, password); 
    setErrors(errors);

    if (!isValid) return;
    if (!acceptedTerms) {
      alert("You must accept the Terms & Conditions!");
      return;
    }

    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/walled.png")} style={styles.logo} resizeMode="contain" />

      <CustomInput placeholder="Fullname" value={fullname} onChangeText={setFullname} error={errors.fullname} />
      <CustomInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" error={errors.email} />
      <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry error={errors.password} />
      <CustomInput placeholder="Avatar Url (optional)" value={avatarUrl} onChangeText={setAvatarUrl} />

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setAcceptedTerms((prev) => !prev)}>
          <Ionicons name={acceptedTerms ? "checkbox" : "square-outline"} size={24} color={acceptedTerms ? "#2563eb" : "#666"} />
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          I have read and agree to the{" "}
          <Text style={styles.termsLink} onPress={() => router.push("/term?fromRegister=true")}>Terms and Conditions</Text>
        </Text>
      </View>

      <CustomButton title="Register" onPress={handleRegister} disabled={!acceptedTerms} />

      <Text style={styles.loginText}>
        Have an account?{" "}
        <Text style={styles.loginLink} onPress={() => router.push("/login")}>Login here</Text>
      </Text>
    </View>
  );
};

// **Gaya**
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff", 
    padding: 20 
  },
  logo: { 
    width: 200, 
    height: 200, 
    marginBottom: 10 
  },
  checkboxContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 20 
  },
  checkboxText: { 
    marginLeft: 10, 
    fontSize: 14, 
    color: "#666" 
  },
  termsLink: { 
    color: "#2563eb", 
    fontWeight: "bold" 
  },
  loginText: { 
    marginTop: 15, 
    fontSize: 14, 
    color: "#666" 
  },
  loginLink: { 
    color: "#2563eb", 
    fontWeight: "bold" 
  },
});

export default RegisterScreen;

