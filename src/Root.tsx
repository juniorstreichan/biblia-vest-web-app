import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './routes/history';
import GlobalStyles from './theme/GlobalStyles';
import AuthProvider from './context/AuthProvider';

const Root: React.FC = () => {
  return (
    <Router history={history}>
      <AuthProvider>
        <GlobalStyles />
        <Routes />
      </AuthProvider>
    </Router>
  );
};

export default Root;
