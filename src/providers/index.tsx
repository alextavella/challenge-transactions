import React from 'react';
import { FlashProvider } from '../hooks/flash';
import { TransactionProvider } from '../hooks/transaction';
import ThemeProvider from './ThemeProvider';

const MainProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <TransactionProvider>
        <FlashProvider>{children}</FlashProvider>
      </TransactionProvider>
    </ThemeProvider>
  );
};

export default MainProvider;
