import React from 'react';
import Icon from 'react-icons-kit';
import { ic_help, ic_home, ic_search, ic_settings_power } from 'react-icons-kit/md';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import logo from '../../../assets/img/logo.svg';
import { Nav, NavGroup, NavItem, Wrapper } from './styles';

const Navbar: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <Wrapper>
      <Nav>
        <img width="80px" src={logo} alt="Biblia Vest" />

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

          <NavItem to="/login" exact activeClassName="active">
            <Icon icon={ic_settings_power} size={20} />
            Sair
          </NavItem>
        </NavGroup>
      </Nav>
    </Wrapper>
  );
};

export default withRouter(Navbar);
