import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';

type BtnStatus = 'default' | 'warning' | 'primary' | 'success' | 'danger';
interface ButtonProps {
  status?: BtnStatus;
}
const BaseButton = styled.button.attrs((props: ButtonProps | any) => {
  const { status } = props;

  let borderColor;
  let bgColor;
  let color;

  switch (status) {
    case 'warning':
      borderColor = Colors.gray;
      bgColor = Colors.status.warning;
      color = Colors.dark;
      break;
    case 'primary':
      borderColor = Colors.orange;
      bgColor = Colors.status.primary;
      color = Colors.light;
      break;
    case 'danger':
      borderColor = Colors.gray;
      bgColor = Colors.status.danger;
      color = Colors.light;
      break;
    case 'success':
      borderColor = Colors.gray;
      bgColor = Colors.status.success;
      color = Colors.light;
      break;

    default:
      borderColor = Colors.orange;
      bgColor = Colors.light;
      color = Colors.dark;
      break;
  }

  return {
    ...props,
    borderColor,
    bgColor,
    color,
  };
})`
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};

  opacity: 0.9;
  border-width: 3px;
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
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  :active {
    transform: translateY(1px) !important;
    position: relative;
    top: 3px;
    box-shadow: 0 1px ${Colors.shadow};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <BaseButton {...props}>{children}</BaseButton>
);

export default Button;
