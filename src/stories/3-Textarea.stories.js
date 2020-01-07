import React from 'react';
import TextArea from '../theme/components/TextArea';

export default {
  title: 'Text Area',
  component: TextArea,
};

export const base = () => (
  <div>
    <TextArea placeholder="Digite a pergunta aqui" />
  </div>
);
