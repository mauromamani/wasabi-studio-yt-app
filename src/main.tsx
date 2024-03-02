import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './shared/styles/index.css';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import { store } from './core/store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <main className='dark dark-bg text-foreground min-h-screen '>
          <App />
        </main>
      </Provider>
    </NextUIProvider>
  </React.StrictMode>
);
