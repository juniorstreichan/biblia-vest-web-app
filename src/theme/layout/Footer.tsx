import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';

const StyledFooter = styled.footer`
  width: 100%;
  background: ${Colors.lightGray};
  color: ${Colors.dark};
  height: 40px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Footer = () => {
  return <StyledFooter>Biblia Vest Web App</StyledFooter>;
};

export default Footer;
