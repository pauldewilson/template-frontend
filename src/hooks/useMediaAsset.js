import { useTheme } from '@mui/material/styles';
import { APP_LOGOS, ILLUSTRATIONS, PLACEHOLDER_IMAGES } from '../constants/media';

export const useMediaAsset = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const getThemeAwareLogo = () => {
    return isDarkMode ? APP_LOGOS.LIGHT : APP_LOGOS.DARK;
  };

  return {
    getThemeAwareLogo,
    logos: APP_LOGOS,
    illustrations: ILLUSTRATIONS,
    placeholders: PLACEHOLDER_IMAGES
  };
};
