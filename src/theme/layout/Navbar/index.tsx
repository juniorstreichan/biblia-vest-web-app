import React from 'react';
import Icon from 'react-icons-kit';
import { ic_help, ic_home, ic_search, ic_settings_power } from 'react-icons-kit/md';
import logo from '../../../assets/img/logo.svg';
import { Nav, NavGroup, NavItem, Wrapper, Img } from './styles';
import Button from '../../components/Button';

interface NavProps {
  onLogout: Function;
}

const Navbar: React.FC<NavProps> = ({ onLogout }) => {
  return (
    <Wrapper>
      <Nav>
        <Img src={logo} alt="Biblia Vest" />

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

          <Button compact outline status="danger" onClick={onLogout}>
            <Icon icon={ic_settings_power} size={20} />
          </Button>
        </NavGroup>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
