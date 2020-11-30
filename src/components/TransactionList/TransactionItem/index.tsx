import React from 'react';
import { formatDate } from '../../../utils/dates';
import { formatCurrency } from '../../../utils/numbers';
import {
  Container,
  NameText,
  StatusText,
  DateText,
  AmountText,
} from './styles';

interface TransactionItemProps {
  name: string;
  date: Date;
  amount: number;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  name,
  date,
  amount,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <div>
        <NameText>{name}</NameText>
        <StatusText>Paga</StatusText>
      </div>
      <div>
        <DateText>{formatDate(date)}</DateText>
        <AmountText>{formatCurrency(amount)}</AmountText>
      </div>
    </Container>
  );
};

export default TransactionItem;
