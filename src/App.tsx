import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainProvider from './providers';
import Routes from './routes';

function App() {
  return (
    <MainProvider>
      <Router>
        <Routes />
      </Router>
    </MainProvider>
  );
}

export default App;
