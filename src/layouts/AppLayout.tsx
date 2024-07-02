import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header.component';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
