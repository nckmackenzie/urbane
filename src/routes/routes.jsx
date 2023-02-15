import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../components/layout/MainLayout';
import { Login, SignIn } from '../pages/auth';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);
