import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header.component';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
import FontStyles from '../styles/FontStyles';
import Footer from '../components/footer/Footer.component';
import ScrollToTopBtn from '../components/scroll-to-top-btn/ScrollToTopBtn.component';

const AppLayout = () => {
  return (
    <div>
      <FontStyles />
      <ScrollToTop />
      <Header />
      <Outlet />
      <ScrollToTopBtn />
      <Footer />
    </div>
  );
};

export default AppLayout;
