/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Colors from '../../Colors';

export const BaseTag = styled.span`
  margin: 1px 3px;
  padding: 2px 8px;

  border: 2px solid ${Colors.orange};
  font-size: 12px;
  border-radius: 15px;
  font-family: sans-serif;
  background-color: ${Colors.gray};
  outline: none;
  color: ${Colors.dark};
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  vertical-align: middle;

  span {
    margin-left: 5px;
    cursor: pointer;
  }
`;
