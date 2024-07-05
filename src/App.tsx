import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(routes);

export const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;