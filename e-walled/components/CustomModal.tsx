import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface CustomModalProps {
  visible: boolean;
  message: string;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  iconName?: string; 
}

const CustomModal: React.FC<CustomModalProps> = ({ 
  visible, 
  message, 
  onClose, 
  onConfirm, 
  confirmText = "OK", 
  cancelText, 
  iconName 
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Tampilkan icon jika tersedia */}
          {iconName && <Ionicons name={iconName} size={60} color="green" />}
          <Text style={styles.modalText}>{message}</Text>
          <View style={styles.modalButtonContainer}>
            {onConfirm ? (
              <TouchableOpacity 
                style={[styles.modalButton, { backgroundColor: "#2d6cdf" }]} 
                onPress={onConfirm}
              >
                <Text style={styles.modalButtonText}>{confirmText}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
                style={[styles.modalButton, { backgroundColor: "#2d6cdf" }]} 
                onPress={onClose}
              >
                <Text style={styles.modalButtonText}>{confirmText}</Text>
              </TouchableOpacity>
            )}
            
            {cancelText && (
              <TouchableOpacity 
                style={[styles.modalButton, { backgroundColor: "#ccc" }]} 
                onPress={onClose}
              >
                <Text style={styles.modalButtonText}>{cancelText}</Text>
              </TouchableOpacity>
            )}
          </View>
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
    width: "80%",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default CustomModal;
