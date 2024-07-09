import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import * as Styled from './About.styles';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Styled.AboutPageContainer>
      <div className="page-header">
        <h1>{t('about')}</h1>
      </div>
      <div className="address">
        <h2 className="address-label">{t('address-label')}</h2>
        <p className="address-name">{t('address-novi_sad')}</p>
        <div className="look-on-map">
          <IconButton
            size="large"
            aria-label="look-on-map"
            className="look-on-map__button"
            color='primary'
          >
            <LocationOnIcon />
          </IconButton>
        </div>
        {/* Илије Огњановића 8, Нови Сад 21000 */}
      </div>
      <div>
        <a href="https://www.instagram.com/brutpizzeria?igsh=Zmp1c3ozaG4yZnAy">
          instagram
        </a>
      </div>
      Радно време
    </Styled.AboutPageContainer>
  );
};

export default AboutPage;
