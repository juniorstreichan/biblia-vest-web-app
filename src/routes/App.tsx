import React, { Fragment, useMemo } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const AppRoutes: React.FC<{ path: string }> = ({ path }) => {
  const appPath = useMemo(() => (path === '/' ? path : `${path}/`), [path]);

  return (
    <Switch>
      <Route path={appPath} exact component={Home} />
      <Route path={`${appPath}questoes`} exact component={() => <h1>QUESTÕES</h1>} />
      <Route path={`${appPath}questoes/:id`} component={() => <h1>QUESTÕES ID </h1>} />
      <Route component={() => <span>404</span>} />
    </Switch>
  );
};

const App: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <Fragment>
      <nav>navbar</nav>
      <AppRoutes path={match.path} />
      <footer>rodapé</footer>
    </Fragment>
  );
};

export default App;
