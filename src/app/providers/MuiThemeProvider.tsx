import { ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import { theme } from 'shared/config/theme';

type MUIThemeProviderProps = PropsWithChildren;

export function MUIThemeProvider({ children }: MUIThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
