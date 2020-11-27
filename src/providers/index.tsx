import React from 'react';
import { FlashProvider } from '../hooks/flash';
import ThemeProvider from './ThemeProvider';

const MainProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <FlashProvider>{children}</FlashProvider>
    </ThemeProvider>
  );
};

export default MainProvider;
