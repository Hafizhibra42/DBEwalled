import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

const Header = ({ onToggleTheme, isDarkMode }) => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: "https://i.pravatar.cc/40" }}
        style={styles.profilePic}
      />
      <View>
        <Text style={[styles.userName, isDarkMode && styles.darkText]}>
          Chelsea Immanuela
        </Text>
        <Text
          style={[styles.accountType, isDarkMode && styles.darkAccountType]}
        >
          Personal Account
        </Text>
      </View>
      <TouchableOpacity onPress={onToggleTheme} style={styles.sunIconContainer}>
        <Icon
          name={isDarkMode ? "moon-outline" : "sunny-outline"}
          size={24}
          color={isDarkMode ? "#BBB" : "#FFA500"}
          style={styles.sunIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
