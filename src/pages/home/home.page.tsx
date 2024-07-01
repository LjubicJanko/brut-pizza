import { Link } from 'react-router-dom';
import { PATH } from '../../routes';

const HomePage = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={PATH.MENU}>Menu</Link>
        </li>
        <li>
          <Link to={PATH.CONTACT}>Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
