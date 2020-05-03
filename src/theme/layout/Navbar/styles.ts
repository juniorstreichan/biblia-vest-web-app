import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import BreakPoints from '../../Breakpoints';
import Colors from '../../Colors';

export const Wrapper = styled.div`
  width: 50%;
  text-align: center;
  /* padding-top: 10px; */
  position: fixed;
  z-index: 10;
  @media (max-width: ${BreakPoints.mobile.max}px) {
    width: 95%;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  background: ${Colors.light};
  border-radius: 0 0 25px 25px;
  min-height: 50px;
  height: 120px;
  padding: 10px;
  padding-bottom: 20px;
  box-shadow: 0px 0px 10px ${Colors.shadow};
  @media (max-width: ${BreakPoints.mobile.max}px) {
    padding-bottom: 0px;
    height: 100px;
  }
`;

export const Img = styled.img`
  width: 80px;
  @media (max-width: ${BreakPoints.mobile.max}px) {
    width: 40px;
  }
`;

export const NavGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
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
