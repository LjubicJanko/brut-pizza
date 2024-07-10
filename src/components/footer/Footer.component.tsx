import { useTranslation } from 'react-i18next';
import PhoneIcon from '@mui/icons-material/Phone';
import * as Styled from './Footer.styles';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Styled.FooterContainer>
      <p>{t('address-novi_sad')}</p>
      <div className="contact-phone">
        <PhoneIcon />
        {t('delivery')}
        <a href={`tel:+381652776607`} className="phone-link">
          +381652776607
        </a>
      </div>
    </Styled.FooterContainer>
  );
};

export default Footer;
