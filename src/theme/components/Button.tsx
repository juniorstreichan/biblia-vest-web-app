import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';

type BtnTypes = 'default' | 'warning' | 'primary' | 'success' | 'danger';
interface ButtonProps {
  btnType?: BtnTypes;
}
const StyledButton = styled.button.attrs((props: ButtonProps | any) => {
  const { btnType } = props;
  alert(btnType);
  return {
    ...props,
  };
})`
  opacity: 0.9;
  border-width: 4px;
  font-family: sans-serif;
  font-size: 14px;
  border-radius: 50px;
  border-style: solid;
  padding: 5px 10px;
  margin: 4px 3px;
  font-weight: 700;
  box-shadow: 0 4px ${Colors.shadow};
  outline: none;
  text-align: center;
  text-transform: uppercase;
  :hover {
    opacity: 1;
  }
  :active {
    transform: translateY(1px);
    position: relative;
    top: 3px;
    box-shadow: 0 1px ${Colors.shadow};
  }

  border-color: ${Colors.gray};
  background-color: ${Colors.status.danger};
  color: ${Colors.light};
`;

const Button: React.FC<ButtonProps> = props => <StyledButton {...props}>botao</StyledButton>;

export default Button;
