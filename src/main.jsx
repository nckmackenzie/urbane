import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { ThemeProvider } from './context/ThemeProvider';
import './index.css';
import { UserMenuProvider } from './context/UserMenuProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserMenuProvider>
        <RouterProvider router={router} />
      </UserMenuProvider>
    </ThemeProvider>
  </React.StrictMode>
);
