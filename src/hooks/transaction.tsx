import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export interface Transaction {
  id: string;
  name: string;
  buyer_document: string;
  credit_card_number: string;
  credit_card_expiration_date: string;
  credit_card_cvv: string;
  amount: number;
  created_at: Date;
}

export type RegisterTransaction = Omit<Transaction, 'id' | 'created_at'>;

interface TransactionContextData {
  getTransactions(): Transaction[];
  addTransaction(data: RegisterTransaction): Promise<Transaction>;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

const TransactionProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getTransactions = useCallback(() => transactions, [transactions]);

  const addTransaction = useCallback(async (data: RegisterTransaction) => {
    const transaction: Transaction = {
      id: uuid(),
      ...data,
      created_at: new Date(Date.now()),
    };

    setTransactions(value => [...value, transaction]);

    return transaction;
  }, []);

  const transactionData = {
    getTransactions,
    addTransaction,
  };

  return (
    <TransactionContext.Provider value={transactionData}>
      {children}
    </TransactionContext.Provider>
  );
};

function useTransaction(): TransactionContextData {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error('useTransaction must be used within a TransactionProvider');
  }

  return context;
}
export { useTransaction, TransactionProvider };
