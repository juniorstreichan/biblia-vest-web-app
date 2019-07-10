import React from 'react';
import { Icon } from 'react-icons-kit';
import { cross } from 'react-icons-kit/icomoon/cross';

import { BaseTag } from './styles';

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
