import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../theme/components/Button';

export default {
  title: 'Buttons',
};

export const base = () => (
  <div>
    <Button>default</Button>
    <Button status="warning">warning</Button>
    <Button status="primary">primary</Button>
    <Button status="danger">danger</Button>
    <Button status="success">success</Button>
  </div>
);

export const outline = () => (
  <div>
    <Button outline>default outline</Button>
    <Button outline status="warning">
      warning outline
    </Button>
    <Button outline status="primary">
      primary outline
    </Button>
    <Button outline status="danger">
      danger outline
    </Button>
    <Button outline status="success">
      success outline
    </Button>
  </div>
);
