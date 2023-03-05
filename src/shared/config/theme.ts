import { createTheme } from '@mui/material';

import { COLORS } from './colors';

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Montserrat Alternates', sans-serif",
      color: COLORS.carBody,
    },
  },
});
