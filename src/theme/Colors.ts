const shadowColor = '#999';
const primaryColor = '#0A7AC4';
const secondaryColor = '#63AAD9';
const dangerColor = '#FF6760';
const warningColor = '#ef9910';
const orangeColor = '#EF9945;';
const successColor = '#53BD6B';
const lightColor = '#fffffd';
const grayColor = '#D9E9E9';
const lightGrayColor = '#f3f3f3';
const darkColor = '#000122';

export type ColorStatus = 'primary' | 'danger' | 'warning' | 'success';

const statusColors = {
  primary: primaryColor,
  secondary: secondaryColor,
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
