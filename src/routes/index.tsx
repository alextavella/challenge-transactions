import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Home';
import NewPage from '../pages/New';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/new" exact component={NewPage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
