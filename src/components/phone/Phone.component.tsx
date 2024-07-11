import PhoneIcon from '@mui/icons-material/Phone';
import * as Styled from './Phone.styles';
import { useTranslation } from 'react-i18next';

export type PhoneProps = {
  withNumber?: boolean;
};

export const Phone = ({ withNumber = false }: PhoneProps) => {
  const { t } = useTranslation();
  return (
    <Styled.PhoneContainer>
      <PhoneIcon />
      <a href={`tel:+381652776607`} className="phone-link">
        {t('delivery')}
        {withNumber && <p>+381652776607</p>}
      </a>
    </Styled.PhoneContainer>
  );
};
