import { RouteObject } from 'react-router-dom';
import { ContactsPage, HomePage, MenuPage } from './pages';

export const PATH = {
  HOME: '/',
  MENU: '/menu',
  CONTACT: '/contact'
}

const routes: RouteObject[] = [
  {
    path: PATH.HOME,
    element: <HomePage />,
  },
  {
    path: PATH.MENU,
    element: <MenuPage />,
  },
  {
    path: PATH.CONTACT,
    element: <ContactsPage />,
  },
];

export default routes;
