import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './styles/index.css';
import { Toaster } from 'react-hot-toast';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster position="top-center" reverseOrder={false} />
    </Provider>
  </React.StrictMode>
);