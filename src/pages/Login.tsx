import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

const Login: React.FC<RouteComponentProps> = () => {
  return (
    <h1>
      LOGIN
      <br />
      <Link to="/">APP</Link>
    </h1>
  );
};

export default Login;
