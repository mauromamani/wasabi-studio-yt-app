import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import { store } from './core/store/index.ts';
import { ThemeProvider } from './shared/context/themes';

import './shared/styles/index.css';
import App from './App.tsx';

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
