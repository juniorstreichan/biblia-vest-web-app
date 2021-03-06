/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import Colors from '../../Colors';

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 54px;
  height: 28px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${Colors.gray};
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${Colors.status.primary};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${Colors.status.primary};
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
