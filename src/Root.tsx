import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './theme/GlobalStyles';
import AuthProvider from './context/AuthProvider';

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyles />
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Root;
