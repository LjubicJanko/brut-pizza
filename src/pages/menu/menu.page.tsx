import { Link } from 'react-router-dom';
import { PATH } from '../../routes';

const MenuPage = () => {
  return (
    <>
      <Link to={PATH.HOME}>Home</Link>
      <br></br>menu
    </>
  );
};

export default MenuPage;
