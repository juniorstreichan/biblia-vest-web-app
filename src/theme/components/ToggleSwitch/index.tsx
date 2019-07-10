import React, { InputHTMLAttributes } from 'react';
import { Switch } from './styles';

const ToggleSwitch: React.FC<InputHTMLAttributes<any>> = ({ onChange, checked }) => {
  return (
    <Switch>
      <input
        onChange={onChange || (() => console.log('check'))}
        type="checkbox"
        checked={checked}
      />

      <span className="slider round" />
    </Switch>
  );
};

export default ToggleSwitch;
