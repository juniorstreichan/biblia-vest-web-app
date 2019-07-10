import React, { TextareaHTMLAttributes } from 'react';
import { BaseTextArea } from './styles';

const TextArea: React.FC<TextareaHTMLAttributes<any>> = props => {
  return <BaseTextArea {...props} />;
};

export default TextArea;
