import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Snackbar from './components/Snackbar';
import CartContextProvider from './contexts/cart.context';
import { SnackBarProvider } from './contexts/snackbar.context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartContextProvider>
      <SnackBarProvider>
        <App />
        <Snackbar />
      </SnackBarProvider>
    </CartContextProvider>
  </React.StrictMode>,
);
