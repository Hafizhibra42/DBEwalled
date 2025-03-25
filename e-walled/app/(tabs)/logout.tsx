import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Redirect } from "expo-router";
import { useTheme } from "@/context/ThemeContext";
import CustomModal from "@/components/CustomModal";

const LogoutScreen = () => {
  const { isDarkMode } = useTheme();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect) {
    return <Redirect href="/login" />;
  }

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.header, isDarkMode && styles.darkText]}>Logout</Text>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Ionicons name="log-out-outline" size={100} color={isDarkMode ? "#FFF" : "#2d6cdf"} />
      </TouchableOpacity>

      <CustomModal
        visible={isModalVisible}
        message="Are you sure you want to logout?"
        onClose={() => setIsModalVisible(false)}
        onConfirm={() => setShouldRedirect(true)}
        confirmText="Yes"
        cancelText="No"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#f7f7f7"
  },
  darkContainer: {
     backgroundColor: "#121212"
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  darkText: {
    color: "#FFF"
  },
});

export default LogoutScreen;
