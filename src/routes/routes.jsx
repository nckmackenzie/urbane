import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Login, SignIn } from '../pages/auth';
import {
  Dashboard,
  Properties,
  Agents,
  Messages,
  Reviews,
  Profile,
} from '../pages';

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
        element: <Dashboard />,
      },
      {
        path: '/properties',
        element: <Properties />,
      },
      {
        path: '/agents',
        element: <Agents />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
      {
        path: '/reviews',
        element: <Reviews />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);
