import { RouteObject } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import AboutPage from './pages/about';
import HomePage from './pages/home';
import MenuPage from './pages/menu';

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
