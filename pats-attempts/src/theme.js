import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3F693A',
    },
    secondary: {
      main: '#AA4131',
    },
    error: {
      main: "#A44936",
    },
    background: {
      default: '#F4F3F1',
    },
  },
});

export default theme;