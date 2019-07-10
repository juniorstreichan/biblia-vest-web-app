import React from 'react';
import Icon from 'react-icons-kit';
import { ic_help, ic_home, ic_search, ic_settings_power } from 'react-icons-kit/md';
import { RouteComponentProps } from 'react-router-dom';
import { Wrapper, Nav, Title, NavGroup, NavItem } from './styles';
import Button from '../../components/Button/index';

const Navbar: React.FC<RouteComponentProps | any> = ({ history }) => {
  return (
    <Wrapper>
      <Nav>
        <Title>Biblia Vest</Title>

        <NavGroup>
          <NavItem to="/" exact activeClassName="active">
            <Icon icon={ic_home} size={20} />
            Home
          </NavItem>
          <NavItem to="/questoes" exact activeClassName="active">
            <Icon icon={ic_help} size={20} />
            Questões
          </NavItem>
          <NavItem to="/questoes/teste" exact activeClassName="active">
            <Icon icon={ic_search} size={20} />
            Buscar
          </NavItem>
          <Button status="danger" onClick={() => history.push('/login')}>
            <Icon icon={ic_settings_power} size={20} />
          </Button>
        </NavGroup>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
