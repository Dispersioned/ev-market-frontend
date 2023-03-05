import { App } from 'app';
import React from 'react';
import ReactDOM from 'react-dom/client';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires, import/extensions
  const { worker } = require('shared/mocks/browser');
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
