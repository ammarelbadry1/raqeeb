import { createBrowserRouter } from 'react-router-dom';

import {
  DashboardLayout
} from './layouts';
import {
  Public,
  Dashboard,
  Root,
  App,
  ErrorPage,
  Login,
  Signup
} from './pages';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Public />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: '/auth/signup',
        element: <Signup />,
      },
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/app',
        element: <App />,
      }
    ]
  }
]);
