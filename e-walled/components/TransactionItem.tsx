import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';

interface TransactionProps {
  id: string;
  name: string;
  type: string;
  amount: string;
  date: string;
  isPositive: boolean;
}

const TransactionItem: React.FC<{ transaction: TransactionProps; isDarkMode: boolean }> = ({ transaction, isDarkMode }) => {
  return (
    <View style={[styles.transactionItem, isDarkMode && styles.darkTransactionItem]}>
      <View style={styles.transactionLeft}>
        <Image source={{ uri: "https://i.pravatar.cc/50" }} style={styles.avatar} />
        <View>
          <Text style={[styles.transactionName, isDarkMode && styles.darkText]}>{transaction.name}</Text>
          <Text style={[styles.transactionType, isDarkMode && styles.darkAccountType]}>{transaction.type}</Text>
          <Text style={[styles.transactionDate, isDarkMode && styles.darkAccountType]}>{transaction.date}</Text>
        </View>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          transaction.isPositive ? styles.positiveAmount : styles.negativeAmount,
        ]}>
        {transaction.amount}
      </Text>
    </View>
  );
};

export default TransactionItem;
