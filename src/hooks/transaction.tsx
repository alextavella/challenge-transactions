import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';
import { parseFromISO } from '../utils/dates';

export interface Transaction {
  id: string;
  buyer_document: string;
  name: string;
  credit_card_number: string;
  credit_card_expiration_date: string;
  credit_card_cvv: string;
  amount: number;
  created_at: Date;
}

interface TransactionDb {
  id: string;
  buyer_document: string;
  credit_card_holder_name: string;
  credit_card_number: string;
  credit_card_expiration_date: string;
  credit_card_cvv: string;
  amount: number;
  date: string;
}

export type RegisterTransaction = Omit<Transaction, 'id' | 'created_at'>;

interface TransactionContextData {
  loading: boolean;
  error: string;
  getTransactions(): Transaction[];
  addTransaction(data: RegisterTransaction): Promise<Transaction>;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

const TransactionProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setLoading(true);

    api
      .get(`/transactions`)
      .then(response => {
        const data = response.data as TransactionDb[];

        const result = data.map(item => {
          const {
            id,
            credit_card_holder_name,
            buyer_document,
            credit_card_number,
            credit_card_cvv,
            credit_card_expiration_date,
            date,
            amount,
          } = item;

          return {
            id,
            name: credit_card_holder_name,
            buyer_document,
            credit_card_number,
            credit_card_cvv,
            credit_card_expiration_date,
            amount,
            created_at: parseFromISO(date),
          };
        });

        setTransactions(result);
      })
      .catch(() => {
        setError('Falha ao carregar as transações, verifique sua conexão');
      })
      .finally(() => setLoading(false));
  }, []);

  const getTransactions = useCallback(() => transactions, [transactions]);

  const addTransaction = useCallback(async (data: RegisterTransaction) => {
    const {
      name,
      buyer_document,
      credit_card_number,
      credit_card_cvv,
      credit_card_expiration_date,
      amount,
    } = data;

    const now = new Date(Date.now());

    const response = await api.post(`/transactions`, {
      buyer_document,
      credit_card_holder_name: name.toUpperCase(),
      credit_card_number,
      credit_card_cvv,
      credit_card_expiration_date,
      amount,
      date: now.toISOString(),
    });

    const transactionDb = response.data as TransactionDb;

    const transaction: Transaction = {
      id: transactionDb.id,
      name: transactionDb.credit_card_holder_name,
      buyer_document,
      credit_card_number,
      credit_card_cvv,
      credit_card_expiration_date,
      amount,
      created_at: now,
    };

    setTransactions(value => [...value, transaction]);

    return transaction;
  }, []);

  const transactionData = {
    loading,
    error,
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
