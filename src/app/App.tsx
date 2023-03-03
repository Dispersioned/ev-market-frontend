import { BrowserRouter } from 'react-router-dom';

import { MUIThemeProvider } from './providers/muiThemeProvider';
import { AppRouter } from './router/AppRouter';
import './styles/global.css';

export function App() {
  return (
    <MUIThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </MUIThemeProvider>
  );
}
