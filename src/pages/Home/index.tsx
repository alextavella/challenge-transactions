import AddIcon from '@material-ui/icons/AddCircle';
import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import TransactionList, {
  TransactionItem,
} from '../../components/TransactionList';
import TransactionSummary from '../../components/TransactionSummary';
import { useTransaction } from '../../hooks/transaction';
import { Content, Header, RegisterButton } from './styles';

const Home: React.FC = () => {
  const { push: redirect } = useHistory();

  const { getTransactions } = useTransaction();

  const transactions = useMemo<TransactionItem[]>(() => {
    return getTransactions().map(({ id, name, amount, created_at }) => ({
      id,
      name,
      amount,
      created_at,
    }));
  }, [getTransactions]);

  const quantity = useMemo<number>(() => transactions.length, [transactions]);

  const total = useMemo<number>(
    () =>
      transactions.reduce((acc: number, transaction: TransactionItem) => {
        acc += transaction.amount;
        return acc;
      }, 0),
    [transactions],
  );

  return (
    <>
      <Header>
        <TransactionSummary quantity={quantity} total={total} />
      </Header>
      <Content>
        <TransactionList transactions={transactions} />
        <RegisterButton
          startIcon={<AddIcon />}
          fullWidth
          onClick={() => redirect('/new')}
        >
          Criar transação
        </RegisterButton>
      </Content>
    </>
  );
};

export default Home;
