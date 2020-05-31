import React, { lazy, Suspense, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('../pages/Login'));

const App = lazy(() => import('./App'));

const Routes: React.FC = () => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Suspense fallback={<div>CARREGANDO...</div>}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute condition={authenticated} redirectPath="/login" path="/" component={App} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
