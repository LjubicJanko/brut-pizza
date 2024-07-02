import { RouteObject } from 'react-router-dom';
import { AboutPage, HomePage, MenuPage } from './pages';
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
        element: <HomePage />,
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
