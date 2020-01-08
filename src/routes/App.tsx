import React, { useMemo } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Container from '../theme/layout/Container';
import Content from '../theme/layout/Content';
import Footer from '../theme/layout/Footer';
import Navbar from '../theme/layout/Navbar';

const AppRoutes: React.FC<{ path: string }> = ({ path }) => {
  const appPath = useMemo(() => (path === '/' ? path : `${path}/`), [path]);

  return (
    <Switch>
      <Route path={appPath} exact component={Home} />
      <Route path={`${appPath}questoes`} exact component={() => <div>QUESTÕES</div>} />
      <Route path={`${appPath}questoes/:id`} component={() => <div>QUESTÕES ID </div>} />
      <Route component={() => <span>404</span>} />
    </Switch>
  );
};

const App: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <Container>
      <Navbar />
      <Content>
        <AppRoutes path={match.path} />
      </Content>
      <Footer />
    </Container>
  );
};

export default App;
