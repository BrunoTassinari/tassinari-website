import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContextWrapper } from './context/theme-context';
import { App } from './app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </React.StrictMode>
);
