import React from 'react';
import InputText from '../theme/components/InputText';

export default {
  title: 'Inputs',
};

export const base = () => (
  <div>
    <InputText type="text" value="teste TESTE" />
    <pre>{`<InputText type="text" value="teste TESTE" />`}</pre>
    <br />
    <InputText type="color" />
    <pre>{`<InputText type="color" />`}</pre>
    <br />
    <InputText type="date" />
    <pre>{`<InputText type="date" />`}</pre>
    <br />
    <InputText type="datetime-local" />
    <pre>{`<InputText type="datetime-local" />`}</pre>
    <br />
    <InputText type="email" />
    <pre>{`<InputText type="email" />`}</pre>
    <br />
    <InputText type="file" />
    <pre>{`<InputText type="file" />`}</pre>
    <br />
    <InputText type="month" />
    <pre>{`<InputText type="month" />`}</pre>
    <br />
    <InputText type="number" />
    <pre>{`<InputText type="number" />`}</pre>
    <br />
    <InputText type="password" />
    <pre>{`<InputText type="password" />`}</pre>
    <br />
    <InputText type="range" />
    <pre>{`<InputText type="range" />`}</pre>
    <br />
    <InputText type="search" />
    <pre>{`<InputText type="search" />`}</pre>
    <br />
    <InputText type="tel" />
    <pre>{`<InputText type="tel" />`}</pre>
    <br />
    <InputText type="text" />
    <pre>{`<InputText type="text" />`}</pre>
    <br />
    <InputText type="time" />
    <pre>{`<InputText type="time" />`}</pre>
    <br />
    <InputText type="url" />
    <pre>{`<InputText type="url" />`}</pre>
    <br />
    <InputText type="week" />
    <pre>{`<InputText type="week" `}</pre>
    <br />
  </div>
);
