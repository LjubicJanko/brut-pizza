import { ContactsPage, HomePage, MenuPage } from './pages';

export type Route = {
  handle: string;
  path: string;
  component: React.FC;
  routes?: Route[];
  title?: string;
};

const routes: Route[] = [
  {
    handle: 'base',
    path: '/',
    component: () => <HomePage />,
  },
  {
    handle: 'menu',
    path: '/menu',
    component: () => <MenuPage />,
  },
  {
    handle: 'contact',
    path: '/contact',
    component: () => <ContactsPage />,
  },
];

export default routes;
