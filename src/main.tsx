import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './i18n';
import './index.css';
import routes from './routes';

const router = createBrowserRouter(routes);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
