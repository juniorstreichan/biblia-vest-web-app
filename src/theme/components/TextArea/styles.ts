import styled from 'styled-components';

import Colors from '../../Colors';

export const BaseTextArea = styled.textarea`
  font-size: 14px;
  padding: 5px 10px;
  padding-top: 10px;
  border-radius: 5px 5px 0 0;
  outline: none;
  border: none;
  border-bottom: 3px solid ${Colors.status.primary};
  background-color: ${Colors.gray};

  min-width: 320px;
  min-height: 100px;

  color: ${Colors.dark};

  :focus {
    background-color: ${Colors.lightGray};
  }

  :invalid {
    border-bottom-color: ${Colors.status.warning};
  }
`;
