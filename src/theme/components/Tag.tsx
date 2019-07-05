import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { cross } from 'react-icons-kit/icomoon/cross';

import Colors from '../Colors';

const BaseTag = styled.span`
  margin: 1px 3px;
  padding: 2px 8px;

  border: 1px solid ${Colors.orange};
  font-size: 12px;
  border-radius: 15px;
  font-family: sans-serif;
  background-color: ${Colors.gray};
  outline: none;
  color: ${Colors.dark};
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  box-shadow: 0 3px ${Colors.shadow};
  vertical-align: middle;
  :active {
    box-shadow: 0 2px ${Colors.shadow};
    transform: translateY(5px);
    top: 2px;
    position: relative;
  }

  span {
    margin-left: 5px;
    cursor: pointer;
  }
`;

const Tag: React.FC<{ action?: Function }> = ({ children, action }) => {
  return (
    <BaseTag>
      {children}
      {action && (
        <span onClick={() => action()}>
          <Icon icon={cross} size={10} />
        </span>
      )}
    </BaseTag>
  );
};

export default Tag;
