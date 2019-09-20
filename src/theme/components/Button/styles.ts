import styled from 'styled-components';
import Colors from '../../Colors';

type BtnStatus = 'default' | 'warning' | 'primary' | 'success' | 'danger';

export interface ButtonProps {
  status?: BtnStatus;
  outline: boolean;
}

export const BaseButton = styled.button.attrs((props: ButtonProps | any) => {
  const { status } = props;

  let borderColor;
  let bgColor;
  let color;

  switch (status) {
    case 'warning' || 'orange':
      borderColor = Colors.status.primary;
      bgColor = Colors.status.warning;
      color = Colors.light;
      break;
    case 'primary':
      borderColor = Colors.orange;
      bgColor = Colors.status.primary;
      color = Colors.light;
      break;
    case 'danger':
      borderColor = Colors.gray;
      bgColor = Colors.status.danger;
      color = Colors.light;
      break;
    case 'success':
      borderColor = Colors.gray;
      bgColor = Colors.status.success;
      color = Colors.light;
      break;

    default:
      borderColor = Colors.status.primary;
      bgColor = Colors.light;
      color = Colors.status.primary;
      break;
  }

  return {
    ...props,
    borderColor,
    bgColor,
    color,
  };
})`
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};

  min-width: 100px;
  min-height: 40px;

  border-width: 2px;
  font-family: sans-serif;
  font-size: 12px;
  border-radius: 50px;
  border-style: solid;
  padding: 5px 7px;
  margin: 4px 3px;
  font-weight: bold;
  outline: none;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    transform: scale(0.97) !important;
  }
  :disabled {
    opacity: 0.7;
    box-shadow: 0 1px ${Colors.shadow};
    cursor: not-allowed;
  }
`;

export const BaseButtonOutline = styled.button.attrs((props: ButtonProps | any) => {
  const { status } = props;

  let borderColor;
  const bgColor = Colors.light;
  let color;

  switch (status) {
    case 'warning' || 'orange':
      borderColor = Colors.orange;
      color = Colors.orange;
      break;
    case 'primary':
      borderColor = Colors.status.primary;
      color = Colors.status.primary;
      break;
    case 'danger':
      borderColor = Colors.status.danger;
      color = Colors.status.danger;
      break;
    case 'success':
      borderColor = Colors.status.success;
      color = Colors.status.success;
      break;

    default:
      borderColor = Colors.status.primary;
      color = Colors.status.primary;
      break;
  }

  return {
    ...props,
    borderColor,
    bgColor,
    color,
  };
})`
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};

  min-width: 100px;
  min-height: 40px;

  border-width: 2px;
  font-family: sans-serif;
  font-size: 12px;
  border-radius: 50px;
  border-style: solid;
  padding: 5px 7px;
  margin: 4px 3px;
  font-weight: bold;
  outline: none;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    transform: scale(0.97) !important;
  }
  :disabled {
    opacity: 0.7;
    box-shadow: 0 1px ${Colors.shadow};
    cursor: not-allowed;
  }
`;
