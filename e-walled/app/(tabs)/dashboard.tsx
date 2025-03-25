import React from "react";
import { View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../styles/styles";
import AccountInfo from "@/components/AccountInfo";
import TransactionList from "@/components/TransactionList";
import { transactions } from "@/data/transactions";
import Header from "@/components/Header";
import Greeting from "@/components/Greeting";
import { useTheme } from "@/context/ThemeContext";

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Header onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Greeting name="Chelsea Immanuela" isDarkMode={isDarkMode} />
      <AccountInfo onTopUpPress={() => router.push("/topup")} onTransferPress={() => router.push("/transfer")} />
      <TransactionList transactions={transactions} isDarkMode={isDarkMode} />
    </View>
  );
};

export default HomeScreen;
