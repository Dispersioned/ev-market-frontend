import { BrowserRouter } from 'react-router-dom';

import { MUIThemeProvider } from './providers/MuiThemeProvider';
import { ReduxProvider } from './providers/ReduxProvider';
import { AppRouter } from './router/AppRouter';
import './styles/global.css';

export function App() {
  return (
    <ReduxProvider>
      <MUIThemeProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </MUIThemeProvider>
    </ReduxProvider>
  );
}
