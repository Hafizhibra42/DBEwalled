import React from "react";
import { TextInput, View, Text, StyleSheet, TextInputProps, ViewStyle } from "react-native";

interface CustomInputProps extends TextInputProps {
  error?: string;
  containerStyle?: ViewStyle; // Tambahkan agar bisa dikustomisasi dari luar
}

const CustomInput: React.FC<CustomInputProps> = ({ error, containerStyle, style, ...props }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput style={[styles.input, style, error ? styles.inputError : null]} {...props} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", marginBottom: 10 },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
  },
  inputError: { borderColor: "red" },
  errorText: { color: "red", fontSize: 12, marginTop: 5 },
});

export default CustomInput;
