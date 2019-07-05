import React, { TextareaHTMLAttributes } from 'react';

import styled from 'styled-components';
import Colors from '../Colors';

const BaseTextArea = styled.textarea`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 5px 10px;
  padding-top: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  border-bottom: 3px solid ${Colors.gray};
  background-color: ${Colors.gray};

  color: ${Colors.dark};

  :focus {
    background-color: ${Colors.lightGray};
  }

  :invalid {
    border-bottom-color: ${Colors.status.warning};
  }
`;

const TextArea: React.FC<TextareaHTMLAttributes<any>> = props => {
  return <BaseTextArea {...props} />;
};

export default TextArea;
