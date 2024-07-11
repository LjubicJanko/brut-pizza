import { useTranslation } from 'react-i18next';
import * as Styled from './Footer.styles';
import { Phone } from '../phone/Phone.component';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Styled.FooterContainer>
      <p>+381652776607</p>
      <Phone />
      <p>{t('address-novi_sad')}</p>
    </Styled.FooterContainer>
  );
};

export default Footer;
