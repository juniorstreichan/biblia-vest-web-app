import React, { InputHTMLAttributes } from 'react';

import styled from 'styled-components';
import Colors from '../Colors';

const InputBase = styled.input`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 5px 10px;
  padding-top: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  border-bottom: 3px solid ${Colors.gray};
  background-color: ${Colors.lightGray};

  color: ${Colors.dark};

  :focus {
    background-color: ${Colors.light};
  }

  :invalid {
    border-bottom-color: ${Colors.status.warning};
  }
`;

const InputText: React.FC<InputHTMLAttributes<any>> = props => {
  return <InputBase {...props} />;
};

export default InputText;
