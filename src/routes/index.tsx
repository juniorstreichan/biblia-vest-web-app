import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('../pages/Login'));

const App = lazy(() => import('./App'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<div>CARREGANDO...</div>}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" component={App} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
