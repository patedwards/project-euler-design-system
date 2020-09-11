import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { TheContextProvider } from './TheContext';
import App from './App';
import theme from './theme';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_coawsconfignfig from './aws-exports';
import { ApolloProvider } from 'react-apollo'
import { Auth } from 'aws-amplify'
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth: {
      type: awsconfig.aws_appsync_authenticationType,
      jwtToken: async () => (await Auth.currentSession()).idToken.jwtToken
    }
});



ReactDOM.render(
  <AmplifyAuthenticator>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <TheContextProvider>
            <App />
          </TheContextProvider>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  </AmplifyAuthenticator>,
  document.querySelector('#root'),
);