import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomModal from "@/components/CustomModal";
import { useTheme } from "@/context/ThemeContext";


const TransferScreen = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState(""); 
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const balance = 10000000;
  const recipient = "9000008940208";

  const handleAmountChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setAmount(numericValue);
  };

  const handleTransfer = () => {
    setSuccessModalVisible(true);
  };

  const handleModalClose = () => {
    setSuccessModalVisible(false);
    setAmount(""); 
    setNotes(""); 
  };

  const { isDarkMode } = useTheme(); 

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color={isDarkMode ? "#fff" : "#2d6cdf"} />
        </TouchableOpacity>
        <Text style={[styles.header, isDarkMode && styles.textDark]}>Transfer</Text>
      </View>
      
      <View style={[styles.recipientContainer, isDarkMode && styles.recipientContainerDark]}>
        <Text style={styles.recipientLabel}>To: <Text style={styles.recipient}>{recipient}</Text></Text>
      </View>

      <View style={[styles.inputContainer, isDarkMode && styles.inputContainerDark]}>
        <Text style={[styles.label, isDarkMode && styles.darkText]}>Amount</Text>
        <View style={styles.amountRow}>
          <Text style={styles.currency}>IDR</Text>
          <TextInput
            style={[styles.inputAmount, isDarkMode && styles.textDark]}
            keyboardType="numeric"
            value={amount}
            onChangeText={handleAmountChange}
            placeholder="0"
            placeholderTextColor={isDarkMode ? "#aaa" : "#000"}
          />
        </View>
        <View style={[styles.separator, isDarkMode && styles.separatorDark]} />
          <Text style={[styles.balance, isDarkMode && styles.darkText]}>Balance <Text style={styles.balanceAmount}>IDR {balance.toLocaleString()}</Text></Text>
      </View>
      
      <View style={[styles.inputContainer, isDarkMode && styles.inputContainerDark]}>
        <Text style={[styles.label, isDarkMode && styles.darkText]}>Notes</Text>
        <TextInput style={[styles.input, isDarkMode && styles.textDark]}
        value={notes}
        onChangeText={setNotes}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleTransfer}>
          <Text style={styles.buttonText}>Transfer</Text>
        </TouchableOpacity>
      </View>
      
      <CustomModal
        visible={isSuccessModalVisible}
        message="Transfer Successful!"
        iconName="checkmark-circle"
        onClose={handleModalClose}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
    paddingTop: 40,  //
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  recipientContainer: {
    backgroundColor: "#2d6cdf",
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  recipientLabel: {
    color: "#fff",
    fontSize: 16,
  },
  recipient: {
    fontWeight: "bold",
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#2d6cdf",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#777",
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  currency: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  inputAmount: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
    marginTop: 5,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  balance: {
    fontSize: 14,
    color: "#777",
  },
  balanceAmount: {
    color: "blue",
    fontWeight: "bold",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  button: {
    backgroundColor: "#2d6cdf",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  modalButtonFullWidth: {
    marginTop: 15,
    backgroundColor: "#2d6cdf",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  containerDark: {
    backgroundColor: "#121212",
  },  
  textDark: {
    color: "#fff",
  },  
  recipientContainerDark: {
    backgroundColor: "#1e1e1e",
  },  
  inputContainerDark: {
    backgroundColor: "#1e1e1e",
    borderColor: "#444",
  },  
  separatorDark: {
    backgroundColor: "#555",
  },  
  darkText: {
    color: "#FFF"
 },
});

export default TransferScreen;