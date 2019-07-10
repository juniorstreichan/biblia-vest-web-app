import React from 'react';
import { BaseButton, ButtonProps } from './styles';

const Button: React.FC<HTMLButtonElement | ButtonProps | any> = ({ children, ...props }) => (
  <BaseButton {...props}>{children}</BaseButton>
);

export default Button;
