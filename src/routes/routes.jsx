import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
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
    element: <h1>Hi there</h1>,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);
