import React from 'react';
import { BaseButton, ButtonProps, BaseButtonOutline } from './styles';

const Button: React.FC<HTMLButtonElement | ButtonProps | any> = ({
  children,
  outline = false,
  ...props
}) => {
  if (outline) return <BaseButtonOutline {...props}>{children}</BaseButtonOutline>;
  return <BaseButton {...props}>{children}</BaseButton>;
};

export default Button;
