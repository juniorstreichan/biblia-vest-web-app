import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './theme/GlobalStyles';

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  );
};

export default Root;
