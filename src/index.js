import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { TheContextProvider } from './TheContext';

import App from './App';
import theme from './theme';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <TheContextProvider>
       <App />
      </TheContextProvider>
    </Router>
  </ThemeProvider>,
  document.querySelector('#root'),
);