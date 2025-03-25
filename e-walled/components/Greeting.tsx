import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles';

interface GreetingProps {
  name: string;
  isDarkMode: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ name, isDarkMode }) => {
  return (
    <View style={styles.greetingContainer}>
      <Text style={[styles.greetingText, isDarkMode && styles.darkText]}>
          Good Morning, {name}!
      </Text>
        <Text style={styles.subText}>Check all your incoming and outgoing transactions here</Text>
      <Icon name="sunny" size={40} color="#FFA500" style={styles.emoji} />
    </View>
  );
};

export default Greeting;
