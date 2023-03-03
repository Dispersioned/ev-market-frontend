import { ThemeProvider } from '@mui/material';
import { theme } from 'shared/config/theme';

type ThemeProviderProps = React.PropsWithChildren;

export function MUIThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
