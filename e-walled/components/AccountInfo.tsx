import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles';

interface AccountInfoProps {
  onTopUpPress: () => void;
  onTransferPress: () => void;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ onTopUpPress, onTransferPress }) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <View>
      <View style={styles.accountInfo}>
        <Text style={styles.accountLabel}>Account No.</Text>
        <Text style={styles.accountNumber}>100899</Text>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <View style={styles.balanceRow}>
          <View style={styles.balanceLeft}>
            <Text style={styles.balanceAmount}>
              {isBalanceVisible ? 'Rp 10.000.000' : '******'}
            </Text>
            <TouchableOpacity onPress={() => setIsBalanceVisible(!isBalanceVisible)}>
              <Icon name={isBalanceVisible ? 'eye-outline' : 'eye-off-outline'} size={20} color="#555" />
            </TouchableOpacity>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton} onPress={onTopUpPress}>
              <Icon name="add-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={onTransferPress}>
              <Icon name="paper-plane-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountInfo;
