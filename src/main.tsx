import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import { store } from './core/store/index.ts';
import { ThemeProvider } from './shared/context/themes/index.theme.tsx';

import './shared/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </NextUIProvider>
  </React.StrictMode>
);
