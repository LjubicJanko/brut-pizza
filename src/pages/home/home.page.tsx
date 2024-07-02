import { Link } from 'react-router-dom';
import { PATH } from '../../routes';
import { useTranslation } from 'react-i18next';
import * as Styled from './Home.styles';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Styled.HomeContainer>
      {t('key')}
      <ul>
        <li>
          <Link to={PATH.MENU}>{t('menu')}</Link>
        </li>
        <li>
          <Link to={PATH.CONTACT}>{t('contact')}</Link>
        </li>
      </ul>
    </Styled.HomeContainer>
  );
};

export default HomePage;
