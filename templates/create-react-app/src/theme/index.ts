import createCache from '@emotion/cache';
import { createTheme, ThemeOptions } from '@mui/material/styles';

import data from './mui.theme.json';

export const theme = createTheme(data as ThemeOptions);

export const createEmotionCache = () => {
  return createCache({ key: 'css' });
};
