import { createTheme } from '@mui/material/styles';
import { components } from './components';
import { lightColors, darkColors } from './colors';

export const createAppTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? lightColors : darkColors),
    },
    components,
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    },
    shape: {
      borderRadius: 8,
    },
  });
};