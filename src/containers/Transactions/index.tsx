import React, { useMemo } from 'react';
import TransactionList, {
  TransactionItem,
} from '../../components/TransactionList';
import { Transaction } from '../../hooks/transaction';
import { LoadingText } from './styles';

interface TransactionsProps {
  loading: boolean;
  transactions: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({
  loading,
  transactions,
}) => {
  const source = useMemo<TransactionItem[]>(() => {
    return transactions.map(({ id, name, amount, created_at }) => ({
      id,
      name,
      amount,
      created_at,
    }));
  }, [transactions]);

  return (
    <>
      {loading ? (
        <LoadingText>Carregando...</LoadingText>
      ) : (
        <TransactionList transactions={source} />
      )}
    </>
  );
};

export default Transactions;
