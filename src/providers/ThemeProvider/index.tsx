import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { theme } from '../../styles/theme';

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <MaterialThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  );
};

export default ThemeProvider;
