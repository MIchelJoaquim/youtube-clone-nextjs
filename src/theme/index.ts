import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { colors } from '@material-ui/core';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3EA6FF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.common.white,
      paper: colors.common.white
    },
  },
});

export default theme;