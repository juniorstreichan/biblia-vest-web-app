const shadowColor = '#999';
const primaryColor = '#0a7ac4';
const dangerColor = '#ff735a';
const warningColor = '#ef9945';
const orangeColor = '#e0af7d;';
const successColor = '#2eb67d';
const lightColor = '#fffff9';
const grayColor = '#cce1e2';
const lightGrayColor = '#f3f3f3';
const darkColor = '#000122';

export type ColorStatus = 'primary' | 'danger' | 'warning' | 'success';

const statusColors = {
  primary: primaryColor,
  danger: dangerColor,
  warning: warningColor,
  success: successColor,
};

const Colors = {
  status: statusColors,
  shadow: shadowColor,
  light: lightColor,
  dark: darkColor,
  gray: grayColor,
  lightGray: lightGrayColor,
  orange: orangeColor,
};

export default Colors;
