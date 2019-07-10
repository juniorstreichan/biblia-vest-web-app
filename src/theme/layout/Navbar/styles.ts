import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import BreakPoints from '../../Breakpoints';
import Colors from '../../Colors';

export const Wrapper = styled.div`
  width: 50%;
  text-align: center;
  padding-top: 10px;
  position: fixed;
  z-index: 10;
  @media screen and (max-width: ${BreakPoints.mobile.max}px) {
    width: 95%;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  background: ${Colors.light};
  border-radius: 26px;
  min-height: 50px;
  padding: 10px;
  box-shadow: 0px 0px 10px ${Colors.shadow};
`;

export const NavGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .active {
    text-decoration: underline;
    font-weight: bold;
    color: ${Colors.dark} !important;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${Colors.shadow};
  :visited {
    color: ${Colors.shadow};
  }
`;
