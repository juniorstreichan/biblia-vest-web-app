import React from 'react';
import Tag from '../theme/components/Tag';

export default {
  title: 'Tags',
};

export const base = () => (
  <div>
    <Tag action={() => alert('teste')}>categoria</Tag>
    <Tag>categoria</Tag>
  </div>
);
