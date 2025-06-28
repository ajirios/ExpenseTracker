import React, { createContext, useState, useContext } from 'react';

const TransactionContext = createContext();

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactions must be used within a TransactionProvider');
  }
  return context;
};

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    {
      id: '1',
      date: '2025-06-25',
      amount: 47.98,
      description: 'Haircut',
      location: 'Fresh Salon',
      type: 'Debit',
      category: 'Shopping',
    },
    {
      id: '2',
      date: '2025-06-21',
      amount: 23.90,
      description: 'Chinese takeout',
      location: 'Red Dragon Wok',
      type: 'Debit',
      category: 'Travel',
    },
    {
      id: '3',
      date: '2025-06-17',
      amount: 2970.00,
      description: 'Salary Deposit',
      location: 'Bank',
      type: 'Credit',
      category: 'Income',
    },
  ]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions(prev => [newTransaction, ...prev]);
  };

  const getTransactionById = (id) => {
    return transactions.find(transaction => transaction.id === id);
  };

  const value = {
    transactions,
    addTransaction,
    getTransactionById,
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
}; 