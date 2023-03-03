import { ThemeProvider } from '@mui/material';
import { theme } from 'shared/config/theme';

type MUIThemeProviderProps = React.PropsWithChildren;

export function MUIThemeProvider({ children }: MUIThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
