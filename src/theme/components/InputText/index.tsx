import React, { InputHTMLAttributes } from 'react';
import { InputBase } from './styles';

const InputText: React.FC<InputHTMLAttributes<any>> = props => {
  return <InputBase {...props} />;
};

export default InputText;
