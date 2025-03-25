import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ModalSelector from "react-native-modal-selector";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "@/components/CustomModal";
import { useTheme } from "@/context/ThemeContext";

function TopUpScreen() {
  const { isDarkMode } = useTheme(); 
  const navigation = useNavigation();

  const paymentMethods = [
    { key: "byond", label: "BYOND Pay" },
    { key: "gopay", label: "GoPay" },
    { key: "ovo", label: "OVO" },
    { key: "dana", label: "Dana" },
  ];

  const [amount, setAmount] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("byond");
  const [notes, setNotes] = useState("");
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const handleAmountChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setAmount(numericValue);
  };

  const handleTopUp = () => {
    setSuccessModalVisible(true);
  };

  const handleModalClose = () => {
    setSuccessModalVisible(false);
    setAmount("");
    setSelectedPayment("byond");
    setNotes("");
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={isDarkMode ? "#FFF" : "#2d6cdf"} />
        </TouchableOpacity>
        <Text style={[styles.header, isDarkMode && styles.darkText]}>Top Up</Text>
      </View>

      <View style={[styles.inputContainer, isDarkMode && styles.darkInputContainer]}>
        <Text style={[styles.label, isDarkMode && styles.darkText]}>Amount</Text>
        <View style={styles.amountRow}>
          <Text style={[styles.currency, isDarkMode && styles.darkText]}>IDR</Text>
          <TextInput
            style={[styles.inputAmount, isDarkMode && styles.darkText]}
            keyboardType="numeric"
            placeholder="100000"
            placeholderTextColor={isDarkMode ? "#aaa" : "#000"}
            value={amount}
            onChangeText={handleAmountChange}
          />
        </View>
      </View>

      <View style={[styles.inputContainer, isDarkMode && styles.darkInputContainer]}>
        <Text style={[styles.label, isDarkMode && styles.darkText]}>Payment Method</Text>
        <ModalSelector<{ key: string; label: string }>
          data={paymentMethods}
          initValue={selectedPayment ?? "Select Payment Method"}
          onChange={(option) => setSelectedPayment(option.label)}
          optionTextStyle={{
            ...styles.optionText,
            color: isDarkMode ? "#FFF" : "#000", 
          }}
          optionContainerStyle={{
            ...styles.optionContainer,
            backgroundColor: isDarkMode ? "#333" : "#FFF", 
          }}
          selectedItemTextStyle={{
            ...styles.selectedItemText,
            color: isDarkMode ? "#FFF" : "#000", 
          }}
        />

      </View>

      <View style={[styles.inputContainer, isDarkMode && styles.darkInputContainer]}>
        <Text style={[styles.label, isDarkMode && styles.darkText]}>Notes</Text>
        <TextInput
          style={[styles.input, isDarkMode && styles.darkText]}
          placeholder="Optional"
          placeholderTextColor={isDarkMode ? "#aaa" : "#999"}
          value={notes}
          onChangeText={setNotes}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleTopUp}>
          <Text style={styles.buttonText}>Top Up</Text>
        </TouchableOpacity>
      </View>

      <CustomModal
        visible={isSuccessModalVisible}
        message="Top Up Successful!"
        iconName="checkmark-circle"
        onClose={handleModalClose}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f7f7f7", 
    padding: 20, 
    paddingTop: 40 
  },
  darkContainer: {
     backgroundColor: "#121212" 
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10 
  },
  backButton: {
     marginRight: 10
  },
  header: {
    fontSize: 20,
    fontWeight: "bold"
  },
  darkText: {
     color: "#FFF"
  },
  inputContainer: { 
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#2d6cdf",
    marginBottom: 15
  },
  darkInputContainer: { 
    backgroundColor: "#222",
    borderColor: "#555"
  },
  label: {
    fontSize: 16,
    color: "#777"
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  currency: { 
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10
   },
  inputAmount: { 
    flex: 1, 
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5
  },
  input: { 
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
    marginTop: 5
  },
  initValueText: { 
    color: "#2d6cdf",
    fontSize: 16,
    fontWeight: "bold"
  },
  selectText: {
    color: "#000",
    fontSize: 18
  },
  optionText: { 
    color: "#333", 
    fontSize: 16 
  },
  optionContainer: {
    backgroundColor: "#e6f0ff",
    borderRadius: 10 
  },
  darkOptionContainer: {
    backgroundColor: "#333"
  },
  selectedItemText: {
    color: "#2d6cdf",
    fontWeight: "bold"
  },
  buttonContainer: {
    position: "absolute", 
    bottom: 20, 
    left: 20, 
    right: 20
  },
  button: { 
    backgroundColor: "#2d6cdf",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff", 
    fontSize: 18,
    fontWeight: "bold" 
  },
});

export default TopUpScreen;
