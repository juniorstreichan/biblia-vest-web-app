import React from 'react';
import { BaseButton, ButtonProps, BaseButtonOutline } from './styles';

const Button: React.FC<ButtonProps | any> = ({ children, outline = false, ...props }) => {
  return outline ? (
    <BaseButtonOutline {...props}>{children}</BaseButtonOutline>
  ) : (
    <BaseButton {...props}>{children}</BaseButton>
  );
};

export default Button;
