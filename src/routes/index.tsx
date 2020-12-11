import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Home';
import CreateTransactionPage from '../pages/CreateTransaction';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/criar-transacao" exact component={CreateTransactionPage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
