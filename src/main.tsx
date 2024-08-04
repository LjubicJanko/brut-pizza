import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './i18n';
import './index.css';
import routes from './routes';
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';

const router = createBrowserRouter(routes);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense
    fallback={
      <div className="spinner-wrapper">
        <CircularProgress />
      </div>
    }
  >
    <RouterProvider router={router} />
  </Suspense>
);
