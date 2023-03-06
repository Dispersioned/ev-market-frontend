import { BrowserRouter } from 'react-router-dom';

import { MUIThemeProvider } from './providers/MuiThemeProvider';
import { ReduxProvider } from './providers/ReduxProvider';
import { TokenValidatorProvider } from './providers/TokenValidatorProvider';
import { AppRouter } from './router/AppRouter';
import './styles/global.css';

export function App() {
  return (
    <ReduxProvider>
      <MUIThemeProvider>
        <BrowserRouter>
          <TokenValidatorProvider>
            <AppRouter />
          </TokenValidatorProvider>
        </BrowserRouter>
      </MUIThemeProvider>
    </ReduxProvider>
  );
}
