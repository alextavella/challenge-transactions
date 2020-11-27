import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3F2787',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#65A300',
      contrastText: '#FFF',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        background: '#3F2787',
        borderRadius: 8,
        height: 48,
        border: 0,
        padding: 12,
        disableElevation: true,
      },
      label: {
        textTransform: 'capitalize',
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#3F2787',
          color: '#FFF',
        },
        '&:disabled': {
          backgroundColor: '#F2F2F3',
          color: '#72737A',
        },
      },
    },
    MuiInputBase: {
      root: {
        height: 48,
        padding: 0,
        width: '100%',
      },
    },
    MuiToolbar: {
      root: {
        background: '#F2F2F3',
        boxShadow: 'none',
        color: '#1D1647',
        textAlign: 'center',
        padding: 16,
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
    },
  },
});

export { theme };
