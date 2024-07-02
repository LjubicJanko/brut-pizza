import { Link } from 'react-router-dom';
import { PATH } from '../../routes';

const MenuPage = () => {
  return (
    <>
      <Link to={PATH.HOME}>GO TO HOME</Link>
      <br></br>
      Menu
    </>
  );
};

export default MenuPage;
