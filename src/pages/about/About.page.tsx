import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone } from '../../components/phone/Phone.component';
import * as Styled from './About.styles';
import Divider from '../../components/divider/Divider.component';
import PageHeader from '../../components/page-header/PageHeader.component';

const AboutPage = () => {
  const { t } = useTranslation();

  const businessHours = useMemo(
    () => ({
      monday: '09:00 - 22:00',
      tuesday: '09:00 - 22:00',
      wednesday: '09:00 - 22:00',
      thursday: '09:00 - 22:00',
      friday: '09:00 - 23:00',
      saturday: '09:00 - 23:00',
      sunday: t('closed'),
    }),
    [t]
  );

  return (
    <Styled.AboutPageContainer>
      <PageHeader title={'about'} />
      <div className="page-content">
        <div className="contact">
          <div className="look-on-map">
            <IconButton
              size="large"
              aria-label="look-on-map"
              className="look-on-map__button"
              color="primary"
              onClick={() =>
                window.open(
                  'https://maps.app.goo.gl/GLLzMQmBWjZJHjUX6',
                  '_blank'
                )
              }
            >
              <LocationOnIcon />
              {t('address-novi_sad')}
            </IconButton>
          </div>
          <IconButton
            className="instagram-button"
            onClick={() =>
              window.open(
                'https://www.instagram.com/brutpizzeria?igsh=Zmp1c3ozaG4yZnAy',
                '_blank'
              )
            }
          >
            <InstagramIcon />
            <p>{t('instagram')}</p>
          </IconButton>
          <Phone withNumber />
        </div>
        <Divider />
        <div className="business-hours">
          {Object.entries(businessHours).map(([day, hours]) => (
            <div key={day} className="business-hours-row">
              <div className="business-hours-day">{t(day)}</div>
              <div className="business-hours-time">{hours}</div>
            </div>
          ))}
        </div>
      </div>
    </Styled.AboutPageContainer>
  );
};

export default AboutPage;
