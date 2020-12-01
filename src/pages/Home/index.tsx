import AddIcon from '@material-ui/icons/AddCircle';
import React, { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import TransactionSummary from '../../components/TransactionSummary';
import FlashMessages from '../../containers/FlashMessages';
import Transactions from '../../containers/Transactions';
import { useFlash } from '../../hooks/flash';
import { Transaction, useTransaction } from '../../hooks/transaction';
import {
  Container,
  Content,
  Header,
  WrapperContent,
  WrapperButton,
} from './styles';

const Home: React.FC = () => {
  const { push: redirect } = useHistory();

  const { error, loading, getTransactions } = useTransaction();
  const { addMessage } = useFlash();

  const transactions = useMemo(() => getTransactions(), [getTransactions]);
  const quantity = useMemo<number>(() => transactions.length, [transactions]);
  const total = useMemo<number>(
    () =>
      transactions.reduce((acc: number, transaction: Transaction) => {
        acc += transaction.amount;
        return acc;
      }, 0),
    [transactions],
  );

  useEffect(() => {
    if (error) {
      addMessage({
        type: 'error',
        title: error,
      });
    }
  }, [addMessage, error]);

  return (
    <Container>
      <Header>
        <TransactionSummary quantity={quantity} total={total} />
      </Header>
      <WrapperContent>
        <FlashMessages />
        <Content>
          <Transactions loading={loading} transactions={transactions} />
          <WrapperButton>
            <Button
              startIcon={<AddIcon />}
              fullWidth
              onClick={() => redirect('/new')}
            >
              Criar transação
            </Button>
          </WrapperButton>
        </Content>
      </WrapperContent>
    </Container>
  );
};

export default Home;
