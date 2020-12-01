import AddIcon from '@material-ui/icons/AddCircle';
import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import TransactionList, {
  TransactionItem,
} from '../../components/TransactionList';
import { useTransaction } from '../../hooks/transaction';
import { Content, RegisterButton } from './styles';

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

  return (
    <>
      <header></header>
      <Content>
        <TransactionList transactions={transactions} />
        <RegisterButton
          startIcon={<AddIcon />}
          fullWidth
          onClick={() => redirect('/new')}
        >
          Criar transição
        </RegisterButton>
      </Content>
    </>
  );
};

export default Home;
