import React, { useState } from "react";
import { 
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert 
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton"; 
import termsContent from "../utils/term"; 

function TermsAndConditionsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    Alert.alert("Thank you!", "You have accepted the Terms & Conditions.");
    router.push("/register?acceptedTerms=true"); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Terms & Conditions</Text>
        <View style={styles.placeholder} /> 
      </View>

      <ScrollView style={styles.scrollView}>
        {termsContent.map((paragraph, index) => (
          <Text key={index} style={styles.content}>{paragraph}</Text>
        ))}
      </ScrollView>

      <CustomButton 
        title={accepted ? "Accepted" : "Accept"} 
        onPress={handleAccept} 
        disabled={accepted} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  content: {
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
});

export default TermsAndConditionsScreen;
