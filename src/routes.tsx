import { RouteObject } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import AboutPage from './pages/about/About.page';
import MainPage from './pages/main/Main.page';
import FoodPage from './pages/food/Food.page';

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
        element: <MainPage />,
      },
      {
        path: PATH.MENU,
        element: <FoodPage />,
      },
      {
        path: PATH.ABOUT,
        element: <AboutPage />,
      },
    ],
  },
];
export default routes;
