import { Link } from 'react-router-dom';
import { PATH } from '../../routes';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      {t('key')}
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
