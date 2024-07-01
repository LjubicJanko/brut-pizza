import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.component';
import routes from './routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="main-container">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
