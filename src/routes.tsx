import { RouteObject } from 'react-router-dom';
import App from './App';
import { AboutPage, MenuPage } from './pages';
import AppLayout from './layouts/AppLayout';

export const PATH = {
  HOME: '/',
  MENU: '/menu',
  ABOUT: '/about',
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: PATH.MENU,
        element: <MenuPage />,
      },
      {
        path: PATH.ABOUT,
        element: <AboutPage />,
      },
    ],
  },
];
export default routes;
