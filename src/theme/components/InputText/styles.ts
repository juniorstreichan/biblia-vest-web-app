import styled from 'styled-components';
import Colors from '../../Colors';

export const InputBase = styled.input`
  font-weight: 600;
  font-size: 14px;
  padding: 5px 10px;
  padding-top: 10px;
  border-radius: 5px 5px 0 0;
  outline: none;
  border: none;
  border-bottom: 3px solid ${Colors.status.primary};
  background-color: ${Colors.gray};

  color: ${Colors.dark};

  :disabled {
    background-color: ${Colors.lightGray};
    color: ${Colors.gray};
    border-bottom-color: ${Colors.gray};
    cursor: not-allowed;
  }
  :focus {
    background-color: ${Colors.lightGray};
  }
  :focus:invalid {
    border-bottom-color: ${Colors.status.danger};
  }
`;
