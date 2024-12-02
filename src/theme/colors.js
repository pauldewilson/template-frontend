import { blue, orange, grey, red, green } from '@mui/material/colors';
import { darken } from '@mui/material/styles';

export const lightColors = {
  primary: {
    main: blue[600],
    light: blue[400],
    dark: blue[800],
    contrastText: '#fff',
  },
  secondary: {
    main: orange[500],
    light: orange[300],
    dark: orange[700],
    contrastText: '#fff',
  },
  background: {
    default: grey[300],
    paper: darken(grey[50], 0.12),
  },
  text: {
    primary: grey[900],
    secondary: grey[700],
  },
  success: {
    main: green[600],
    light: green[400],
    dark: green[800],
  },
  warning: {
    main: orange[600],
    light: orange[400],
    dark: orange[800],
  },
  error: {
    main: red[600],
    light: red[400],
    dark: red[800],
  },
};

export const darkColors = {
  primary: {
    main: grey[700],
    light: grey[500],
    dark: grey[900],
    contrastText: '#fff',
  },
  secondary: {
    main: darken(orange[500], 0.5),
    light: darken(orange[300], 0.5),
    dark: darken(orange[700], 0.5),
    contrastText: '#fff',
  },
  background: {
    default: darken(blue[900], 0.9),
    paper: darken(blue[900], 0.8),
  },
  text: {
    primary: '#fff',
    secondary: grey[400],
  },
  success: {
    main: darken(green[600], 0.5),
    light: darken(green[400], 0.5),
    dark: darken(green[800], 0.5),
  },
  warning: {
    main: darken(orange[600], 0.5),
    light: darken(orange[400], 0.5),
    dark: darken(orange[800], 0.5),
  },
  error: {
    main: darken(red[600], 0.5),
    light: darken(red[400], 0.5),
    dark: darken(red[800], 0.5),
  },
};