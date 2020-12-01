import React from 'react';
import { formatCurrency } from '../../utils/numbers';
import { Container, TopicText, ValueText } from './styles';

interface TransactionSummaryProps {
  quantity: number;
  total: number;
}

const TransactionSummary: React.FC<TransactionSummaryProps> = ({
  quantity,
  total,
}) => {
  return (
    <Container>
      <div>
        <TopicText>Número de transações</TopicText>
        <ValueText data-testid="transaction_header_quantity">
          {quantity}
        </ValueText>
      </div>
      <div>
        <TopicText>Valor total</TopicText>
        <ValueText data-testid="transaction_header_total">
          {formatCurrency(total)}
        </ValueText>
      </div>
    </Container>
  );
};

export default TransactionSummary;
