import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header.component';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
import FontStyles from '../styles/FontStyles';

const AppLayout = () => {
  return (
    <div>
      <FontStyles />
      <Header />
      <Outlet />
      <ScrollToTop />
    </div>
  );
};

export default AppLayout;
