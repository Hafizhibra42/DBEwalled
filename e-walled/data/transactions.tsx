import { Transaction } from "@/types/transactions";

export const transactions: Transaction[] = [
  { id: '1', name: 'Adityo Gizwanda', type: 'Transfer', amount: '- 75.000,00', date: '08 Dec 2024', isPositive: false },
  { id: '2', name: 'Adityo Gizwanda', type: 'Topup', amount: '+ 75.000,00', date: '08 Dec 2024', isPositive: true },
  { id: '3', name: 'Adityo Gizwanda', type: 'Transfer', amount: '- 75.000,00', date: '08 Dec 2024', isPositive: false },
];
