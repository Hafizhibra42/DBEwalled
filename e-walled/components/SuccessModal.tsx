import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Ionicons name="checkmark-circle" size={60} color="green" />
          <Text style={styles.modalText}>Transfer Successful!</Text>
          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  modalButton: {
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
});

export default SuccessModal;
