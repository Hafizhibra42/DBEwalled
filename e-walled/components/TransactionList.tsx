import React from 'react';
import { FlatList, Text } from 'react-native';
import TransactionItem from './TransactionItem';
import styles from '../styles/styles';
import { Transaction } from '@/types/transactions';

interface TransactionListProps {
  transactions: Transaction[];
  isDarkMode: boolean; 
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, isDarkMode }) => {
  return (
    <>
      <Text style={[styles.transactionTitle, isDarkMode && styles.darkTransactionTitle]}>
        Transaction History
      </Text>
      <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionItem transaction={item} isDarkMode={isDarkMode} />}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
    </>
  );
};


export default TransactionList;
