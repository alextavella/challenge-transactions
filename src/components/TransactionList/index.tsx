import React from 'react';
import { Container } from './styles';
import TransactionItem from './TransactionItem';

export interface TransactionItem {
  id: string;
  name: string;
  amount: number;
  created_at: Date;
}

interface TransactionListProps {
  transactions: TransactionItem[];
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {transactions.map(transaction => (
        <TransactionItem
          data-testid={transaction.id}
          key={transaction.id}
          name={transaction.name}
          date={transaction.created_at}
          amount={transaction.amount}
        />
      ))}
    </Container>
  );
};

export default TransactionList;
