import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header.component';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollToTop />
    </div>
  );
};

export default AppLayout;
