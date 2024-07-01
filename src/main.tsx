import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import routes from './routes';
import Header from './components/header/Header.component';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="main-container">
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
