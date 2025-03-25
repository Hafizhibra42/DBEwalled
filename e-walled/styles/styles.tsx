import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F8F8', 
    padding: 16, 
    paddingTop: 40 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',  
    marginBottom: 16 
  },
  profilePic: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 12 
  },
  userName: { 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  accountType: {
     fontSize: 12, 
     color: '#000' 
    },
  sunIcon: { 
    marginLeft: 'auto' 
  },
  greetingContainer: {
     marginBottom: 16 
  },
  greetingText: {
     fontSize: 20, 
     fontWeight: 'bold' 
    },
  subText: { 
    fontSize: 14, 
    color: '#555' 
  },
  emoji: { 
    position: 'absolute', 
    right: 0, 
    top: -5 
  },
  accountInfo: {
     flexDirection: 'row', 
     justifyContent: 'space-between', 
     backgroundColor: '#1E88E5', 
     padding: 12, 
     borderRadius: 8 
    },
  accountLabel: {
     color: 'white', 
     fontSize: 14 
  },
  accountNumber: {
     color: 'white', 
     fontSize: 16, 
     fontWeight: 'bold' 
    },
  balanceContainer: {
     backgroundColor: 'white', 
     padding: 16,
    borderRadius: 8, 
    marginTop: 12 
  },
  balanceLabel: { 
    fontSize: 14, 
    color: '#555' 
  },
  balanceRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginTop: 8 
  },
  balanceLeft: {
     flexDirection: 'row', 
     alignItems: 'center' 
    },
  balanceAmount: {
     fontSize: 20, 
     fontWeight: 'bold', 
     marginRight: 8 
    },
  eyeIcon: {
     padding: 4 
    },
  actions: { 
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12 
  },
  actionButton: {
     backgroundColor: '#1E88E5',
    padding: 12, 
    borderRadius: 30, 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 50, 
    height: 50 
  },
  transactionTitle: {
     fontSize: 16, 
     fontWeight: 'bold', 
     marginTop: 16 
    },
  transactionItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    padding: 12, 
    borderRadius: 8, 
    marginVertical: 6
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center' 
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12
  },
  transactionName:{ 
    fontSize: 14, 
    fontWeight: 'bold'
  },
  transactionType: {
     fontSize: 12,
      color: '#555'
  },
  transactionDate: {
     fontSize: 12,
      color: '#999'
  },
  transactionAmount: {
     fontSize: 14,
    fontWeight: 'bold'
  },
  positiveAmount: {
    color: 'green' 
  },
  negativeAmount: {
     color: 'red'
  },
  darkText: {
     color: '#FFF' 
  }, 
  darkAccountType: {
     color: '#BBB' 
  },
  darkBalanceContainer: {
     backgroundColor: '#1E1E1E'
  }, 
  darkTransactionItem: {
     backgroundColor: '#1E1E1E'
  },
  darkContainer: {
     backgroundColor: '#121212'
  },
  sunIconContainer: { 
    marginLeft: 'auto' 
  },  
  darkTransactionTitle: {
     color: "#FFF" 
  }, 
});

export default styles;
