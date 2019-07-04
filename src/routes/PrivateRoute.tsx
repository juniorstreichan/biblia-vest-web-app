import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const isAuth = true;
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuth) {
          return <Component {...props} />;
        }
        // AuthStorage.clear();
        return <Redirect to={{ pathname: '/login' }} />;
      }}
    />
  );
};

export default PrivateRoute;
